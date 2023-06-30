import {Select, SelectProps, Tag} from "antd";
import {useSelect} from "@refinedev/antd";
import {IAuthor} from "@model";
import React from "react";
import {BaseRecord} from "@refinedev/core";
import {EntitySelect, RemoteFilter} from "@planb/components/fields/EntitySelect";
import {CustomTagProps} from "rc-select/es/BaseSelect";

export const AuthorSelect = (props: SelectProps) => {

  const itemToOption = (item: BaseRecord) => ({

    label: item ? `${item.name.firstName} ${item.name.lastName}` : null,
    value: item ? item['@id'] : null
  })

  const remote: RemoteFilter = (term: any) => {
    return {
      field: 'name',
      operator: 'partial',
      value: term
    }
  }

  return <EntitySelect
    {...props}
    resource={'bookstore/authors'}
    itemToOption={itemToOption}
    remote={remote}
  />
}
