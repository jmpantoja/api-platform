import {BaseKey, BaseRecord, FormAction, HttpError} from "@refinedev/core";
import {useDrawerForm, UseDrawerFormProps, UseDrawerFormReturnType} from "@refinedev/antd";
import {DrawerProps, FormProps} from "antd";

export interface UseFormDrawerProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends Omit<UseDrawerFormProps, 'action'> {
  like: 'drawer'
  resource: string
  action?: FormAction
  id?: BaseKey
  formProps?: FormProps
  drawerProps?: DrawerProps
}

export interface UseFormDrawerReturnType<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends UseDrawerFormReturnType {
  like: 'drawer',
  id?: BaseKey
  action: FormAction
  resource: string
}

export const useFormDataDrawer =
  <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables = {}, TSelectData extends BaseRecord = TData>
  ({like, ...props}: UseFormDrawerProps<TData, TError, TVariables>)
    : UseFormDrawerReturnType<TData, TError, TVariables> => {

    const {drawerProps: drawer, formProps: form, ...extra} = useDrawerForm(props as UseDrawerFormProps)


    const drawerProps: DrawerProps = {
      destroyOnClose: true,
      ...drawer,
      ...props.drawerProps
    }

    const formProps = {
      ...form,
      ...props.formProps,
    }

    return {
      like: 'drawer',
      action: (props.action as FormAction),
      resource: props.resource,
      formProps,
      drawerProps,
      ...extra
    }
  }
