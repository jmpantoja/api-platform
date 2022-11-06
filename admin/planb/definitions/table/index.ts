import {CrudFilters, CrudSort, Pagination} from "@pankod/refine-core";

export interface CrudRequest {
  pagination?: Pagination,
  filters?: CrudFilters,
  sort?: CrudSort[],
}

export type {
  CrudSort
}
