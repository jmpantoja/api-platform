import React, {ReactNode} from "react";
import {UseModalFormProps} from "@pankod/refine-react-hook-form";
import {UseDrawerFormProps} from "@pankod/refine-antd/src/hooks/form/useDrawerForm/useDrawerForm";
import {ModalFormData, ModalFormDataProps} from "@planb/components";
import {useResource} from "@pankod/refine-core";
import {PageFormData} from "@planb/components/formData/PageFormData";
import {useRouter} from "next/router";
import {Breadcrumb, Create, Edit, Form, useForm, useModalForm} from "@pankod/refine-antd";

type FormAction = 'edit' | 'create' | 'clone'

export interface FormDataProps extends Omit<UseModalFormProps, 'action'>, Omit<UseDrawerFormProps, 'action'> {
  children?: ReactNode
  action?: FormAction
}

function actionFromPath(asPath: string, route: string, id: string): FormAction {
  return asPath
    .replace(route, '')
    .replace(id, '')
    .split('/')
    .filter((s: string) => s.trim().length > 0)
    .pop()  as FormAction || 'create';
}

export const FormData = ({children, ...props}: FormDataProps) => {

  const {id, resource: {name, route}} = useResource()
  const {asPath} = useRouter()
  const action = actionFromPath(asPath, route, id)


  props = {
    id,
    resource: name,
    action,
    ...props
  }

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
