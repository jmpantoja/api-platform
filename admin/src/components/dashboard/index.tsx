import React from "react";
import {BookForm} from "@components/crud/books/form";
import {useFormLayout} from "@planb/components/form/useFormLayout";
import {Button} from "antd";

export default function Dashboard() {

  const {show, ...props} = useFormLayout({
    like: 'drawer',
    resource: 'bookstore/books',
    action: 'edit',
    drawerProps: {
      width: 1000
    }
  })

  return <>
    <Button onClick={() => {
      show('01841e4b-eb6a-6342-1e7c-127845ce7ed6')
    }}>Dale</Button>
    <BookForm  {...props} />
  </>
}
