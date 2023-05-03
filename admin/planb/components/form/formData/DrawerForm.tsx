import {UseFormDrawerReturnType} from "@planb/components/form/formData/useFormData/useFormDrawer";
import {WithChildren} from "@planb/components/form/formData/types";
import {Drawer} from "antd";
import css from "@planb/components/form/formData/style.module.less";
import {PageForm, PageFormProps} from "@planb/components/form/formData/PageForm";
import React from "react";

export type DrawerFormProps = UseFormDrawerReturnType & WithChildren;
export const DrawerForm = ({drawerProps, ...props}: DrawerFormProps) => {

  return <Drawer {...drawerProps} className={css.drawerForm}>
    <PageForm {...props as PageFormProps}/>
  </Drawer>
}
