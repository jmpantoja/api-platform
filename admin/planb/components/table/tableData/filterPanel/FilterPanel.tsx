import {Button, Card, Form, FormInstance, FormProps, Space} from "antd";

import css from './style.module.less'
import {useTranslate} from "@refinedev/core";
import {ReactNode} from "react";
import {FilterList, FilterValueList} from "@planb/components/table/tableData/filterPanel/types";

interface FilterPanelProps extends FormProps {
  filters: FilterList,
  defaultValues?: FilterValueList
}


const mergeDefaultValues = (filters: FilterList, defaultValues?: FilterValueList): FilterValueList => {

  const emptyValues = Object.keys(filters).reduce((carry, name) => {
    return {
      ...carry,
      [name]: {
        operator: undefined,
        value: null
      }
    }
  }, {})

  return {
    ...emptyValues,
    ...defaultValues
  }

}


export const FilterPanel = ({filters, defaultValues, resource, ...formProps}: FilterPanelProps) => {

  const t = useTranslate()

  const onReset = () => {
    const form = (formProps.form as FormInstance);
    const values = mergeDefaultValues(filters, defaultValues)

    form.resetFields()
    form.setFieldsValue(values)
    form.submit()

  };

  return <Form {...formProps} className={css.filterForm} layout={'vertical'}>
    <Card title={'Busqueda'} bordered={false} className={css.filterPanel} actions={[
      <div className={'footer'}>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button htmlType="submit" type="primary">
          Filter
        </Button>
      </div>
    ]}>
      {Object.entries(filters).map(([name, Input], index) => {
        return <Form.Item name={name} key={index} label={t(`${resource}.fields.${name}`)}>
          {Input as ReactNode}
        </Form.Item>
      })}
    </Card>
  </Form>

}
