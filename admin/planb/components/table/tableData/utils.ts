import {FilterValueList, FilterData} from "@planb/components/table/tableData/filterPanel/types";
import {CrudFilters, LogicalFilter} from "@refinedev/core";

type FilterList = (FilterData & { field: string })[]

export const onSearch = (input: FilterValueList): CrudFilters => {

  return Object.entries(input)
    .map(([field, value]) => {
      return {
        field,
        ...value
      }
    }) as CrudFilters
}

export const getFiltersRecord = (input: CrudFilters): FilterValueList => {

  const filters = input as FilterList

  return filters.reduce((carry, filter) => {
    const {field, operator, value} = filter

    return {
      ...carry,
      [field]: {
        operator,
        value
      }
    }
  }, {})

}
