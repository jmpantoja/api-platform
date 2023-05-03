import {AntdEditInferencer} from "@refinedev/inferencer/antd";
import {useFormData} from "@planb/components/form";
import {BookForm} from "@components/crud/books/form";
import React from "react";
import {AuthorForm} from "@components/crud/authors";

export const AuthorEdit = () => {
  const {...props} = useFormData({
    resource: 'bookstore/authors',
    action: "edit",
  })
  return <AuthorForm  {...props} />
}
