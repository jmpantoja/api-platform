import {TableProps} from "@pankod/refine-antd";
import {ActionsColumn, ButtonProps, ColumnInputList} from "@planb/definitions/listView";
import {Entity} from "@planb/definitions/entity";
import {ColumnType, SorterResult} from "antd/lib/table/interface";
import {IResourceItem, useResource, useTranslate} from "@pankod/refine-core";
import TableActions from "@planb/components/listView/TableActions";
import {TablePaginationConfig} from "antd";
import {mapAntdFilterToCrudFilter, mapAntdSorterToCrudSorting} from "@pankod/refine-antd/src/definitions/table";


interface BuildColumProps<TData extends Entity> {
  name: string,
  column: ColumnType<TData>
}

const buildColumn = <TData extends Entity>(props: BuildColumProps<TData>): ColumnType<TData> => {
  const {resourceName} = useResource();
  const t = useTranslate();
  const {name, column} = props

  return {
    dataIndex: name,
    title: t(`${resourceName}.fields.${name}`),
    width: 'auto',
    ...column,
    render: (value, record, index) => {
      return column.render ? column.render(value, record, index) : value
    },

  }
}

interface BuildActionColumnProps<TData> {
  actions?: ActionsColumn<TData>,
  resource: IResourceItem,
  isEditable: boolean
  editButtonProps: ButtonProps<TData>
}

const buildActionColumn = <TData extends Entity>(props: BuildActionColumnProps<TData>): ColumnType<TData> => {
  const {
    actions,
    resource,
    isEditable,
    editButtonProps
  } = props

  return {
    width: actions?.width || 200,
    render: (value, record) => {
      return TableActions({
        actions,
        resource,
        record,
        editButtonProps,
        isEditable
      })
    }
  }
}

interface BuildTableProps<TData extends Entity> {
  tableProps: TableProps<TData>
  columns: ColumnInputList<TData>,
  actions?: ActionsColumn<TData>,
  resource: IResourceItem,
  isEditable: boolean,
  editButtonProps: ButtonProps<TData>
}

const buildTableProps = <TData extends Entity>(props: BuildTableProps<TData>): TableProps<TData> => {
  const {
    tableProps,
    columns: columnsList,
    actions,
    resource,
    isEditable,
    editButtonProps
  } = props;

  const columns = Object.entries(columnsList)
    .map(([name, column]) => {
      return buildColumn({
        name,
        column,
      })
    })

  columns.push(buildActionColumn({
    actions,
    resource,
    isEditable,
    editButtonProps
  }))

  return {
    columns,
    rowKey: 'id',
    ...tableProps,
    scroll: {y: '65vh'},
    pagination: {
      ...tableProps.pagination,
      showSizeChanger: false
    }

  };
}

export default buildTableProps
