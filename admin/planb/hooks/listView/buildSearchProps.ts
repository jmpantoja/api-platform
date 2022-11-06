import {FilterInputList, FilterItem, SearchPanelProps} from "@planb/definitions/listView";
import {FormProps, TableProps} from "antd";
import {useEditableTableReturnType} from "@pankod/refine-antd/src/hooks/table/useEditableTable/useEditableTable";
import {buildRestoreFunction} from "@planb/hooks/listView/buildRestoreFunction";

interface BuildSearchPanelProps<TData> {
  tableProps: TableProps<TData>,
  setFilters: useEditableTableReturnType["setFilters"],
  searchFormProps: FormProps,
  filters?: FilterInputList
}

const buildFilters = (filters: FilterInputList): FilterItem[] => {
  return Object.entries(filters)
    .map(([name, filter]): FilterItem => {
      return {
        dataIndex: name,
        filter: filter
      }
    })
}

const buildSearchPanel = <TData>(props: BuildSearchPanelProps<TData>): SearchPanelProps => {
  const {tableProps, setFilters, searchFormProps, filters = {}} = props
  const restore = buildRestoreFunction({tableProps, setFilters})

  return {
    formProps: searchFormProps,
    filters: buildFilters(filters),
    restore
  }
}

export default buildSearchPanel
