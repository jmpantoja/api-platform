// import {CrudRequest, CrudSort} from "@planb/definitions/table";

import {CrudFilters, CrudSort, Pagination} from "@refinedev/core";

interface GenerateQueryProps  {
  filters?: CrudFilters
  sorters?: CrudSort[],
  pagination?: Pagination
}

export const generateQuery = ({filters, sorters, pagination}: GenerateQueryProps): string => {

  const params = new URLSearchParams()

  sorters?.forEach((item: CrudSort) => {
    const key = `order[${item.field}]`
    params.append(key, item.order)
  })

  const fields: string[] = []

  filters?.forEach((item) => {

    if ('field' in item && !fields.includes(item.field)) {

      fields.push(item.field)

      const key = `${item.field}[${item.operator}]`
      params.append(key, item.value)
    }
  })

  if (pagination?.current) {
    params.append('page', (pagination.current as unknown as string))
  }

  if (pagination?.pageSize) {
    params.append('itemsPerPage', (pagination.pageSize as unknown as string))
  }

  return params.toString()
}
