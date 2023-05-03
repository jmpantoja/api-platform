import {UseFormModalReturnType} from "@planb/components/form/formData/useFormData/useFormModal";
import {WithChildren} from "@planb/components/form/formData/types";
import {Modal} from "antd";
import css from "@planb/components/form/formData/style.module.less";
import {SingleForm, SingleFormProps} from "@planb/components/form/formData/SingleForm";
import React from "react";
import {useErrorBag, useFormContext} from "@planb/components/form";
import classNames from "classnames";

export type ModalFormProps = UseFormModalReturnType & WithChildren;
export const ModalForm = ({modalProps, ...props}: ModalFormProps) => {

  const {isValid} = useErrorBag()

  return <Modal {...modalProps} className={css.modalForm} okButtonProps={{
    disabled: !isValid
  }}>
    <SingleForm {...props as SingleFormProps}/>
  </Modal>
}
