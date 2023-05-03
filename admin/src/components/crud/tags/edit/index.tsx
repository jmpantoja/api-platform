import {useFormData} from "@planb/components/form";
import React from "react";
import {TagForm} from "@components/crud/tags/form";

export const TagEdit = () => {

  const props = useFormData()
  return <TagForm  {...props} />
}
