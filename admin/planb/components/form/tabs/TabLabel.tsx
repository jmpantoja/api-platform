import {useErrorBag} from "@planb/components/form";
import slug from "slug";
import css from "./style.module.less";
import React from "react";

interface TabLabelProps {
  label: string
}

export const TabLabel = ({label}: TabLabelProps) => {
  const {errorTabs} = useErrorBag()
  const error = errorTabs[slug(label)];

  if (error) {
    return <span className={css.tabError}>{label}</span>
  }
  return <span>{label}</span>
}
