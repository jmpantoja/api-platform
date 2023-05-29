import {useFormData} from "@planb/components/form";
import React from "react";
import {AuthorForm} from "@components/crud/authors";

export const AuthorEdit = () => {
  const {...props} = useFormData({
    resource: 'bookstore/authors',
    action: "edit",
  })
  return <AuthorForm  {...props} />
}
