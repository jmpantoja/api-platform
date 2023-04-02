import {useErrorBag} from "@planb/components/form/formLayout";
import slug from "slug";
import css from "@planb/components/form/style.module.less";
import {Tab} from "rc-tabs/lib/interface";

import React from "react";

interface TabLabelProps {
  label: string
}

const TabLabel = ({label}: TabLabelProps) => {
  const {errorTabs} = useErrorBag()
  const error = errorTabs[slug(label)];

  if (error) {
    return <span className={css.tabError}>{label}</span>
  }
  return <span>{label}</span>
}

interface TabArgs extends Omit<Tab, 'key' | 'label'> {
  key?: string
  label: string
}

export const tab = (props: TabArgs): Tab => {
  const {label, children, ...tabProps} = props
  const key = slug(label)

  return {
    key: key,
    forceRender: true,
    label: <TabLabel label={label}/>,
    children,
    ...tabProps,
  }
}
