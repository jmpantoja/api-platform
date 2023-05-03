import {useFormData} from "@planb/components/form";
import {BookForm} from "@components/crud/books/form";
import React from "react";

export const BookEdit = () => {
  const {...props} = useFormData({
    resource: 'bookstore/books',
    action: "edit",

  })
  return <BookForm  {...props} />
}
