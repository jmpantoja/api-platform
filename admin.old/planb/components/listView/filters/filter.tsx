import {Select} from 'antd';
import React, {useState} from 'react';
import {FilterProps, FilterValue} from "@planb/definitions/listView";
import styles from './styles.module.less'

const {Option} = Select;

interface FilterWrapperProps extends FilterProps {
  field: React.FC<any>,
  operators: { [key: string]: string },
  onChange?: (value: FilterValue) => void
  value: FilterValue
}

export const Filter = ({value, onChange, operators, field: Field}: FilterWrapperProps) => {
  const defaultOperator = Object.keys(operators).shift()
  const [data, setData] = useState({
    query: null,
    operator: defaultOperator,
    ...value
  })

  const triggerChange = (changedValue: FilterValue) => {
    const newData = {
      ...data,
      ...changedValue
    }

    setData(newData)
    onChange?.(newData);

  };

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    triggerChange({query})
  };

  const onOperatorChange = (operator: string) => {
    triggerChange({operator})
  };

  return (
    <div className={styles.filter}>
      <Select
        value={data.operator}
        onChange={onOperatorChange}
      >
        {Object.entries(operators).map(([operator, label]) => {
          return <Option key={operator} value={operator}>{label}</Option>
        })}
      </Select>

      <Field value={data.query} onChange={onQueryChange}/>
    </div>
  )
}
