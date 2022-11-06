import React, {FocusEvent, useState} from 'react';
import {InputNumber} from "@pankod/refine-antd";
import {FilterProps, FilterValue} from "@planb/definitions/listView";
import styles from './styles.module.less'


const toNumber = (value: string): number | undefined => {
  if ((!value || /^\s*$/.test(value))) {
    return undefined
  }
  return +value
}

const mountRange = (data: RangeValue) => {
  if (typeof data.min !== "number" || typeof data.max !== "number") {
    return data
  }

  if ((data.min) > (data.max)) {
    return {
      min: data.max,
      max: data.min
    }
  }
  return data
}


const mountValue = (data: RangeValue): FilterValue => {

  if (data.min && data.max) {
    return {
      operator: 'between',
      query: `${data.min}..${data.max}`
    }
  }

  if (data.min) {
    return {
      operator: 'gte',
      query: data.min
    }
  }

  if (data.max) {
    return {
      operator: 'lte',
      query: data.max
    }
  }

  return {
    operator: '',
    query: null
  }
}

interface RangeValue {
  min?: number,
  max?: number
}

export const NumberFilter = ({value = {}, onChange}: FilterProps) => {

  const [range, setRange] = useState<RangeValue>()
  const change = (input: RangeValue) => {

    const data = mountRange({
      ...range,
      ...input
    })

    setRange(data)
    onChange?.(mountValue(data))
  }

  return (
    <div className={styles.range}>

      <InputNumber
        controls={false}
        bordered={false}
        placeholder={"Min"}
        value={range?.min}
        onBlur={(event: FocusEvent<HTMLInputElement>) => {
          const value = toNumber(event.target.value)
          change({min: value})
        }}

      />
      <span>/</span>
      <InputNumber
        controls={false}
        bordered={false}
        placeholder={"Max"}
        value={range?.max}
        onBlur={(event: FocusEvent<HTMLInputElement>) => {
          const value = toNumber(event.target.value)
          change({max: value})
        }}

      />
    </div>
  );
};


