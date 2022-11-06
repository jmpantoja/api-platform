import {SelectProps} from "@pankod/refine-antd";
import React from "react";
import ComboBox, {ComboBoxProps} from "@planb/components/input/ComboBox";
import {IAuthor} from "~/interfaces";

const AuthorSelect = (props: SelectProps) => {

  const comboBoxProps: ComboBoxProps<IAuthor> = {
    ...props,
    resource: 'bookstore/authors',
    parseLabel: (record) => {
      const {name} = record

      return `${name.lastName}, ${name.firstName}`
    }
  }

  return <ComboBox {...comboBoxProps}/>
}

export default AuthorSelect
