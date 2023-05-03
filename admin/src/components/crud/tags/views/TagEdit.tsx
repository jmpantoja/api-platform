import {useFormData} from "@planb/components/form";
import React from "react";
import {TagForm} from "@components/crud/tags";

export const TagEdit = () => {

  const props = useFormData({
    resource: 'bookstore/tags'
  })
  return <TagForm  {...props} />
}
