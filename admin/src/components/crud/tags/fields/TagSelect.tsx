import {SelectProps, Tag} from "antd";
import React from "react";
import {EntitySelect, RemoteFilter} from "@planb/components/fields/EntitySelect";
import {BaseRecord} from "@refinedev/core";
import {CustomTagProps} from "rc-select/es/BaseSelect";

export const TagSelect = (props: SelectProps) => {

  const itemToOption = (item: BaseRecord) => {
    return {
      label: item ? item.name : null,
      value: item ? item['@id'] : null
    }
  }
  const remote: RemoteFilter = (term: any) => {
    return {
      field: 'name',
      operator: 'partial',
      value: term
    }
  }

  const tagRender = ({label, ...props}: CustomTagProps) => {
    return <Tag color={'processing'} {...props} > {label} </Tag>
  };

  return <EntitySelect
    {...props}
    mode="multiple"
    resource={'bookstore/tags'}
    itemToOption={itemToOption}
    tagRender={tagRender}
    remote={remote}
  />
}
