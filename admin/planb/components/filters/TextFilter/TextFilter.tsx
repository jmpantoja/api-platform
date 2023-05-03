import {Input, Select, Space} from "antd";

import {useState} from "react";
import {useTranslate} from "@refinedev/core";
import {FilterData} from "@planb/components/table/tableData/filterPanel";

const {Option} = Select;

interface TextFilterProps {
  onChange?: (value: FilterData) => void
  value?: FilterData
}

export const TextFilter = ({value, onChange}: TextFilterProps) => {

  const t = useTranslate()
  const operators = {
    exact: t('filters.operators.exact'),
    partial: t('filters.operators.partial'),
    start: t('filters.operators.start'),
    end: t('filters.operators.end')
  }

  const [data, setData] = useState({
    value: value?.value ?? null,
    operator: value?.operator ?? 'partial'
  })

  const triggerChange = (changedValue: Partial<FilterData>) => {
    const newData = {
      ...data,
      ...changedValue
    }

    setData(newData)
    onChange?.(newData);
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    triggerChange({value})
  };

  const onOperatorChange = (operator: string) => {
    triggerChange({operator})
  };

  return <Space>
    <Select
      value={data.operator}
      onChange={onOperatorChange}>
      {Object.entries(operators).map(([operator, label]) => {
        return <Option key={operator} value={operator}>{label}</Option>
      })}
    </Select>

    <Input value={data.value} onChange={onValueChange}/>
  </Space>

}
