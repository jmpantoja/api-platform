import {useErrorBag} from "@planb/components/form/formData/useErrorBag";
import {FieldData} from "rc-field-form/es/interface";
import {Form, FormProps} from "antd";
import React, {ReactNode} from "react";
import {WithChildren} from "@planb/components/form/formData/types";
import css from './style.module.less'

export type SingleFormProps = { formProps: FormProps } & WithChildren;
export const SingleForm = ({children, formProps}: SingleFormProps) => {

  const errorBag = useErrorBag()
  const onFieldsChange = (_: FieldData[], allFields: FieldData[]) => {
    errorBag.update(allFields)
  }


  return <Form layout={'vertical'} className={css.formData} {...formProps} onFieldsChange={onFieldsChange}>
    {children as ReactNode}
  </Form>;
}
