import {Select, SelectProps} from "antd";
import {useSelect} from "@refinedev/antd";
import {IAuthor} from "@model";
import React from "react";

export const AuthorSelectBorrame = (props: SelectProps) => {

  const {queryResult, selectProps} = useSelect<IAuthor>({
    resource: "bookstore/authors"
  });

  const options = queryResult.data?.data.map((item) => ({
    label: `${item.name.firstName} ${item.name.lastName}`,
    value: item['@id'],
  }));

  const value = typeof props.value === 'object' ? props.value['@id'] : props.value

  return (
    <Select
      placeholder="Select an  Author"
      style={{width: 300}}
      value={value}
      {...selectProps}
      options={options}
      onChange={(value, option) => {
        props.onChange?.(value, option)
      }}
    />
  );
}
