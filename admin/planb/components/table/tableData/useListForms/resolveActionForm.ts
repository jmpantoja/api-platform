import {FormDataProps, useFormData} from "@planb/components/form";
import {FC} from "react";
import {BaseKey} from "@refinedev/core";

interface ResolveFormLikeProps {
  modal?: FC<FormDataProps>
  drawer?: FC<FormDataProps>
}

interface ResolveFormLikeReturnType {
  like?: 'modal' | 'drawer'
  form?: FC<FormDataProps>
}

const resolveFormLike = ({modal, drawer}: ResolveFormLikeProps): ResolveFormLikeReturnType => {
  if (modal !== undefined) {
    return {like: 'modal', form: modal}
  }

  if (drawer !== undefined) {
    return {like: 'drawer', form: drawer}
  }

  return {like: undefined, form: undefined}
}

interface ResolveActionFormProps {
  resource: string,
  action: 'edit' | 'create'
  modal?: FC<FormDataProps>
  drawer?: FC<FormDataProps>
  width?: string | number
}

interface ResolveListFormReturnType {
  show?: (id?: BaseKey) => void
  form?: JSX.Element
}

export const resolveActionForm = (props: ResolveActionFormProps): ResolveListFormReturnType => {
  const {
    resource, action, modal, drawer, width
  } = props

  if (modal !== undefined) {
    const {show, ...props} = useFormData({
      like: 'modal',
      resource,
      action,
      modalProps: {
        width: width ?? '1000px'
      }
    })
    return {show, form: modal(props) as JSX.Element}
  }

  if (drawer !== undefined) {
    const {show, ...props} = useFormData({
      like: 'drawer',
      resource,
      action,
      drawerProps: {
        width: width ?? '500px'
      }
    })
    return {show, form: drawer(props) as JSX.Element}
  }

  return {show: undefined, form: undefined}
}
