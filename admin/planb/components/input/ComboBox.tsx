import {Select, SelectProps} from "@pankod/refine-antd";
import {useList} from "@pankod/refine-core";
import {DefaultOptionType} from "rc-select/lib/Select";
import {Entity} from "@planb/definitions/entity";
import {useEffect} from "react";

export interface ComboBoxProps<TData extends Entity> extends SelectProps {
  resource: string,
  parseValue?: (record: TData) => string
  parseLabel: (record: TData) => string
}

function ComboBox<TData extends Entity>(props: ComboBoxProps<TData>) {

  const {
    resource, value, onChange, parseLabel,
    parseValue = (record: TData) => {
      return record['@id']
    }
  } = props


  const itemToOption = (record: TData) => {
    return {
      value: parseValue(record),
      label: parseLabel(record)
    }
  }

  const findCurrent = (value: TData | string | undefined, options: DefaultOptionType[]): DefaultOptionType | undefined => {
    if (typeof value === "undefined") {
      return undefined
    }
    let id = value;
    if (typeof value === "object") {
      id = parseValue(value)
    }

    return options.find((option) => {
      return option.value === id
    })

  }

  const {data} = useList({
    resource,
    config: {
      pagination: {
        pageSize: 50
      }
    },
    queryOptions: {
      select: (response) => {
        return {
          data: response.data.map((record) => itemToOption(record as TData)),
          total: response.total
        }
      }
    }
  })

  const filterOption = (input: string, option: DefaultOptionType | undefined) => {
    return ((option?.label) as string ?? '').includes(input)
  }

  const options: DefaultOptionType[] = (data?.data ?? []) as DefaultOptionType[]

  const current = findCurrent(value, options)

  useEffect(() => {
    if (current && onChange) {
      onChange(current.value, current)
    }
  }, [current])


  return <Select options={options}
                 onChange={onChange}
                 value={current}
                 defaultValue={current}
                 showSearch={true}
                 filterOption={filterOption}/>
}

export default ComboBox
