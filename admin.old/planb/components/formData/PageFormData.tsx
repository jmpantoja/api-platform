import {Breadcrumb, Create, Edit, Form, Modal, useForm, useModalForm} from "@pankod/refine-antd";
import {FormDataProps} from "@planb/components";
import {useResource} from "@pankod/refine-core";
import React from "react";

export interface ModalFormDataProps extends Omit<FormDataProps, 'wrapper'> {
}

export const PageFormData = ({children, action, ...props}: ModalFormDataProps) => {

  const {formProps, saveButtonProps, formLoading} = useForm({...props})

  const viewProps = {
    saveButtonProps: {
      ...saveButtonProps,
      icon: null
    },
    headerButtons: [],
    breadcrumb: <Breadcrumb hideIcons={true}/>
  }

  const Wrapper = action === 'create' ? Create : Edit

  return <Wrapper {...viewProps} isLoading={formLoading}>
    <Form {...formProps} >
      {children}
    </Form>
  </Wrapper>

}
