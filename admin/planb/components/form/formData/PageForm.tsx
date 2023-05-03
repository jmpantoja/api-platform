import classNames from "classnames";
import css from "@planb/components/form/formData/style.module.less";
import {Create, Edit} from "@refinedev/antd";
import {SingleForm, SingleFormProps} from "@planb/components/form/formData/SingleForm";
import React from "react";
import {UseFormPageReturnType} from "@planb/components/form/formData/useFormData/useFormPage";
import {WithChildren} from "@planb/components/form/formData/types";
import {useFormContext} from "@planb/components/form/formData/useFormContext";
import {useErrorBag} from "@planb/components/form";

export type PageFormProps = Omit<UseFormPageReturnType, 'like'> & WithChildren;
export const PageForm = ({action, resource, saveButtonProps: saveButton, ...props}: PageFormProps) => {

  const {isValid} = useErrorBag()
  const {like} = useFormContext()
  const noIcon = {
    icon: false
  }
  const saveButtonProps = {
    ...saveButton,
    ...noIcon,
    disabled: !isValid
  }

  const wrapperProps = {
    className: classNames(css.formPage, like)
  }

  if (action === 'create') {
    return <Create resource={resource}
                   goBack={false}
                   breadcrumb={false}
                   saveButtonProps={saveButtonProps}
                   wrapperProps={wrapperProps}>
      <SingleForm {...props as SingleFormProps}/>
    </Create>
  }
  return <Edit resource={resource}
               goBack={false}
               breadcrumb={false}
               saveButtonProps={saveButtonProps}
               deleteButtonProps={noIcon}
               wrapperProps={wrapperProps}
               headerButtons={[]}
  >
    <SingleForm {...props as SingleFormProps}/>
  </Edit>
}
