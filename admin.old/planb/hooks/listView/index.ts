import {Entity} from "@planb/definitions/entity";
import {HttpError, useResource} from "@pankod/refine-core";
import {ActionsColumn, ButtonProps, ColumnInputList, ColumnInputType, CreateOrEditProps, FilterInputList, FormWrapperProps, SearchPanelProps} from "@planb/definitions/listView";
import {TableProps, useTable} from "@pankod/refine-antd";
import buildTableProps from "@planb/hooks/listView/buildTableProps";
import buildSearchPanel from "@planb/hooks/listView/buildSearchProps";
import onSearch from "@planb/hooks/listView/buildOnSearch";
import buildFormWrapper from "@planb/hooks/listView/buildFormWrapperProps";
import {TablePaginationConfig} from "antd";
import {FilterValue, SorterResult, TableCurrentDataSource} from "antd/lib/table/interface";
import {mapAntdFilterToCrudFilter, mapAntdSorterToCrudSorting} from "@pankod/refine-antd/src/definitions/table";


export interface UseListViewProps<TData extends Entity, TError extends HttpError = HttpError> {
  table?: TableProps<TData>
  columns: ColumnInputList<TData>,
  actions?: ActionsColumn<TData>
  filters?: FilterInputList,
  create?: CreateOrEditProps
  edit?: CreateOrEditProps
}

interface UseListViewReturnType<TData extends Entity> {
  tableProps: TableProps<TData>,
  searchPanelProps: SearchPanelProps,
  isSearchable: boolean,
  createProps: FormWrapperProps<TData>,
  editProps: FormWrapperProps<TData>,
  createButtonProps: ButtonProps<TData>
}

export const useListView = <TData extends Entity>(props: UseListViewProps<TData>): UseListViewReturnType<TData> => {

  const {table, columns, filters, actions, create, edit} = props
  const {resource} = useResource()

  const {
    tableProps: tableParams,
    searchFormProps,
    setFilters,
    setSorter
  } = useTable<TData>({
    ...table,
    onSearch,
    // defaultSetFilterBehavior: 'replace'
  })

  const isSearchable = Object.keys(filters || {}).length > 0

  const {wrapperProps: createProps, buttonProps: createButtonProps} =
    buildFormWrapper(create ? {...create, action: "create"} : create)

  const {wrapperProps: editProps, buttonProps: editButtonProps} =
    buildFormWrapper(edit ? {...edit, action: "edit"} : edit)


  const tableProps = buildTableProps({
    tableProps: {...table, ...tableParams},
    columns,
    actions,
    resource,
    isEditable: !!edit,
    editButtonProps
  })

  const searchPanelProps = buildSearchPanel<TData>({
    tableProps: tableParams,
    setFilters,
    searchFormProps,
    filters
  })

  const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<TData> | SorterResult<TData>[],
    extra: TableCurrentDataSource<TData>
  ) => {

    if ('column' in sorter) {
      const column = sorter.column as ColumnInputType<TData>
      sorter.field = column?.sortKey || sorter.field
    }

    tableProps.onChange?.(pagination, filters, sorter, extra)
  }

  return {
    tableProps: {
      ...tableProps,
      onChange,
    },

    searchPanelProps,
    isSearchable,
    createProps,
    editProps,
    createButtonProps,
  }
}
