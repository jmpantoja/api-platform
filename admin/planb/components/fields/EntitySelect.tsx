import {Button, Select, SelectProps, Tag} from "antd";
import {useSelect} from "@refinedev/antd";
import React, {FC, useEffect, useState} from "react";
import {BaseRecord, CrudFilter, useCan, useDataProvider, useList} from "@refinedev/core";
import {DefaultOptionType, FilterFunc} from "rc-select/es/Select";
import {FormDataProps, useFormData} from "@planb/components/form/formData";

interface EntitySelectProps extends SelectProps {
  resource: string
  itemToOption: (item: BaseRecord) => DefaultOptionType
  remote?: RemoteFilter,
  createForm?: FC<FormDataProps>
}

export type RemoteFilter = (term: string) => { field: string, operator: string, value: any }

interface CreateButtonProps {
  resource: string,
  createForm: FC<FormDataProps>
}

const CreateButton = ({resource, createForm}: CreateButtonProps) => {
  const {show, ...props} = useFormData({
    resource,
    action: 'create',
    like: "modal",
  })

  return <>
    <Button type="link" onClick={() => (
      show()
    )}>dale</Button>

    {createForm(props)}
  </>

}

export const EntitySelect = ({resource, itemToOption, createForm, remote, ...props}: EntitySelectProps) => {

  const {data: role} = useCan({
    resource,
    action: 'create'
  })
  const dataProvider = useDataProvider()('default')
  const [data, setData] = useState<BaseRecord[]>([])
  const [value, setValue] = useState<DefaultOptionType | DefaultOptionType[] | undefined>([])

  useEffect(() => {
    if (['tags', 'multiple'].includes(props.mode as string)) {
      setValue((props.value ?? []).map(itemToOption))
      return
    }

    setValue(props.value ? itemToOption(props.value) : undefined)
  }, [])

  useEffect(() => {

    if (remote) {
      if (['tags', 'multiple'].includes(props.mode as string)) {
        setData((props.value ?? []))
        return
      }
      setData([])
      return
    }

    dataProvider.getList({
      resource
    }).then((response) => {
      setData(response.data)
    })

  }, [remote])


  const onChange = (value: any, option: DefaultOptionType | DefaultOptionType[]) => {
    props.onChange?.(value, option)
    setValue(option)
  };

  const filterOption: FilterFunc<DefaultOptionType> = (input, option) => {
    return (option?.label as string).toLowerCase().includes(input.toLowerCase())
  };

  const onSearch = (term: string) => {

    const filters = remote ? [remote(term) as CrudFilter] : undefined

    dataProvider.getList({
      resource,
      filters
    }).then((response) => {
      setData(response.data)
    })
  };

  const search = remote ? {
    onSearch
  } : {}

  return <>
    <Select
      {...props}
      options={data.map(itemToOption)}
      showSearch={true}
      value={value}
      onChange={onChange}
      {...search}
      filterOption={filterOption}
    />
    {role?.can && createForm != undefined && <CreateButton resource={resource} createForm={createForm}/>}

  </>
}
