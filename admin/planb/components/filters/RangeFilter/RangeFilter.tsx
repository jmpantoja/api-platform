import {InputNumber, Space} from "antd";
import {useEffect, useState} from "react";
import {FilterData} from "@planb/components/table/tableData/filterPanel";
import css from './styles.module.less'
import {filterDataToRange, rangeToFilterData, sortRange, Range} from "@planb/components/filters/RangeFilter/utils";


interface RangeFilterProps {
  onChange?: (value: FilterData) => void
  value?: FilterData
}

export const RangeFilter = ({value, onChange}: RangeFilterProps) => {
  const [range, setRange] = useState<Range>({} as Range)

  const triggerChange = (value: Partial<Range>) => {
    const newRange = {
      ...range,
      ...value
    }
    setRange(newRange)
  };


  useEffect(() => {
    const locationValue = filterDataToRange(value)
    triggerChange(locationValue as Range)
  }, [])


  const onBlur = () => {
    const sorted = sortRange(range)
    setRange(sorted)
    const data = rangeToFilterData(range)

    onChange?.(data)
  }

  return <Space className={css.range}>
    <InputNumber
      controls={false}
      bordered={false}
      placeholder={"Min"}
      value={range?.min}
      onBlur={onBlur}
      onChange={(value) => {
        triggerChange({min: value as number})
      }}/>

    <span>/</span>

    <InputNumber
      controls={false}
      bordered={false}
      placeholder={"Max"}
      value={range?.max}
      onBlur={onBlur}
      onChange={(value) => {
        triggerChange({max: value as number})
      }}/>
  </Space>
}
