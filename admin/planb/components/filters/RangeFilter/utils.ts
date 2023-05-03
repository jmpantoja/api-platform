import isNil from "lodash/isNil";
import {FilterData} from "@planb/components/table/tableData/filterPanel";

export interface Range {
  min: number,
  max: number
}

export const sortRange = (range: Range): Range => {
  if (isNil(range.min) || isNil(range.max)) {
    return range
  }

  const {min, max} = range
  if (min <= max) {
    return range
  }

  return {
    min: max,
    max: min
  }
}
export const filterDataToRange = (data?: FilterData): undefined | Range => {
  if (isNil(data)) {
    return
  }

  if (data.operator === 'lte') {
    return {
      max: data.value
    } as Range
  }

  if (data.operator === 'gte') {
    return {
      min: data.value
    } as Range
  }

  if (data.operator === 'between') {
    const [min, max] = data.value.split('..')

    return {
      min,
      max
    } as Range
  }
}
export const rangeToFilterData = (range: Range): FilterData => {
  if (isNil(range.min) && isNil(range.max)) {
    return {
      value: null
    }
  }

  if (isNil(range.min) && !isNil(range.max)) {
    return {
      operator: 'lte',
      value: range.max
    }
  }

  if (!isNil(range.min) && isNil(range.max)) {
    return {
      operator: 'gte',
      value: range.min
    }
  }

  return {
    operator: 'between',
    value: `${range.min}..${range.max}`
  }
}
