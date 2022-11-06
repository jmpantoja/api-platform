import {Breadcrumb, Create, Edit, useForm} from "@pankod/refine-antd";
import BookForm from "@components/crud/books/form";
import React from "react";
import {IBook} from "~/interfaces";


export const BookCreate = () => {

  const props = useForm<IBook>();

  const {formProps, saveButtonProps, queryResult} = props

  return <Create saveButtonProps={{...saveButtonProps, icon: null}} breadcrumb={<Breadcrumb hideIcons={true}/>}>
    <BookForm {...formProps}/>
  </Create>
}


