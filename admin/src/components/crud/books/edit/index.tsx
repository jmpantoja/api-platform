import {AntdEditInferencer} from "@refinedev/inferencer/antd";
import {useFormLayout} from "@planb/components/form/useFormLayout";
import {BookForm} from "@components/crud/books/form";
import React from "react";
import {Button} from "antd";
import {useResource} from "@refinedev/core";

export const BookEdit = () => {

  const {show, ...props} = useFormLayout()

  return <BookForm  {...props} />
}
