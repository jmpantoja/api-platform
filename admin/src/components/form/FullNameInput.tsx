import {FullName} from "@model";
import {RuleObject} from "rc-field-form/es/interface";
import {Input, InputNumber, InputProps, Select, Space} from "antd";
import {ChangeEvent} from "react";

interface FullNameInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: FullName,
  onChange?: (data: FullName) => void
}

export const FullNameRule = (rule: RuleObject, value: FullName) => {
  return Promise.resolve()
  // const {amount} = value
  //
  // if (amount > 0) {
  //   return Promise.resolve()
  // }
  // return Promise.reject('FullName must be greater than zero!')
}

export const FullNameInput = ({value, onChange}: FullNameInputProps) => {

  const triggerChange = (data: Partial<FullName>) => {
    console.log(value, data)

    onChange?.({
      ...(value as FullName),
      ...data
    })
  }

  return <Space>
    <Input
      value={value?.firstName}
      placeholder={'Nombre'}
      onChange={(el: ChangeEvent<HTMLInputElement>) => {
        const firstName = el.target.value as string
        triggerChange({
          firstName
        })
      }}
    />

    <Input
      value={value?.lastName}
      placeholder={'Apellidos'}
      onChange={(el: ChangeEvent<HTMLInputElement>) => {
        const lastName = el.target.value as string
        triggerChange({
          lastName
        })
      }}
    />

  </Space>
}

