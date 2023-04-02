import {useFormLayout} from "@planb/components/form/useFormLayout";
import React from "react";
import {TagForm} from "@components/crud/tags/form";

export const TagEdit = () => {

  const props = useFormLayout()

  return <TagForm  {...props} />
}
