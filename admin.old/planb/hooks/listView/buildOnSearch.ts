import {FilterValue} from "@planb/definitions/listView";
import {CrudFilters} from "@pankod/refine-core";

const onSearch = (params: Record<string, FilterValue>): FilterValue[] => {

  console.log(params)
  return Object.entries(params)
    .filter(([_, param]) => {

      return param && param.operator
    })
    .map(([field, param]) => {
      const {operator, query: value} = param
      return {
        field,
        operator,
        value
      }
    })

}

const onSearchForcedType = onSearch as (data: unknown) => CrudFilters

export default onSearchForcedType
