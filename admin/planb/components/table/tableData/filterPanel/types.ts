import {ReactElement} from "react";

export type FilterData = {
  operator?: string,
  value: any
}
export type  FilterValueList = Record<string, FilterData>

type FilterItem = ReactElement
export type FilterList = Record<string, FilterItem>





