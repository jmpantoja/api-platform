import {
  useDrawerForm,
  UseDrawerFormProps, UseDrawerFormReturnType,
  useForm,
  UseFormProps,
  UseFormReturnType,
  useModalForm,
  UseModalFormProps,
  UseModalFormReturnType
} from "@refinedev/antd";
import {BaseKey, BaseRecord, FormAction, HttpError, useRouterContext} from "@refinedev/core";
import {DrawerProps, FormProps, ModalProps} from "antd";
import {useResource} from "@refinedev/core";


interface UseFormViewProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends UseFormProps {
  like?: undefined | 'view'
  resource?: string
  action?: FormAction
  id?: BaseKey
  formProps?: FormProps
}

interface UseFormModalProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends Omit<UseModalFormProps, 'action'> {
  like: 'modal'
  resource?: string
  action?: FormAction
  id?: BaseKey
  formProps?: FormProps
  modalProps?: ModalProps
}

interface UseFormDrawerProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends Omit<UseDrawerFormProps, 'action'> {
  like: 'drawer'
  resource?: string
  action?: FormAction
  id?: BaseKey
  formProps?: FormProps
  drawerProps?: DrawerProps
}

type UseFormLayoutProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> = UseFormViewProps<TData, TError, TVariables, TSelectData>
  | UseFormModalProps<TData, TError, TVariables, TSelectData>
  | UseFormDrawerProps<TData, TError, TVariables, TSelectData>


export interface UseFormViewReturnType<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends UseFormReturnType {
  like: 'view',
  id?: BaseKey
  action?: FormAction,
  resource?: string;
  show: () => void
}

export interface UseFormModalReturnType<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> extends UseModalFormReturnType {
  like: 'modal'
  id?: BaseKey
  action: FormAction,
  resource?: string
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
  resource?: string;

}

export type UseFormLayoutReturnType<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> = UseFormViewReturnType<TData, TError, TVariables, TSelectData>
  | UseFormModalReturnType<TData, TError, TVariables, TSelectData>
  | UseFormDrawerReturnType<TData, TError, TVariables, TSelectData>


const FakeShow = (): void => {
  return
}

const useViewFormLayout =
  <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables = {}, TSelectData extends BaseRecord = TData>
  ({like, ...props}: UseFormViewProps<TData, TError, TVariables>)
    : UseFormViewReturnType<TData, TError, TVariables> => {

    return {
      like: 'view',
      action: props.action,
      resource: props.resource,
      show: () => FakeShow,
      ...useForm(props)
    }
  }

const useModalFormLayout =
  <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables = {}, TSelectData extends BaseRecord = TData>
  ({like, ...props}: UseFormModalProps<TData, TError, TVariables>)
    : UseFormModalReturnType<TData, TError, TVariables> => {

    const {modalProps: modal, formProps: form, ...extra} = useModalForm(props as UseModalFormProps)
    const modalProps = {
      ...modal,
      ...props.modalProps
    }

    const formProps = {
      ...form,
      ...props.formProps
    }


    return {
      like: 'modal',
      action: (props.action as FormAction),
      resource: props.resource,
      formProps,
      modalProps,
      ...extra
    }
  }

const useDrawerFormLayout =
  <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables = {}, TSelectData extends BaseRecord = TData>
  ({like, ...props}: UseFormDrawerProps<TData, TError, TVariables>)
    : UseFormDrawerReturnType<TData, TError, TVariables> => {

    const {drawerProps: drawer, formProps: form, ...extra} = useDrawerForm(props as UseDrawerFormProps)
    const drawerProps = {
      ...drawer,
      ...props.drawerProps
    }

    const formProps = {
      ...form,
      ...props.formProps
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

export const useFormLayout =
  <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables = {}, TSelectData extends BaseRecord = TData>
  (props?: UseFormLayoutProps<TData, TError, TVariables, TSelectData>)
    : UseFormLayoutReturnType<TData, TError, TVariables, TSelectData> => {

    props = props ?? {}
    const {resource, action, id} = useResource();
    const {like} = props

    props = {
      ...props,
      resource: props.resource ?? (resource?.name),
      action: props.action ?? (action as FormAction),
      id: props.id ?? id,
    }

    if ('modal' === like) {
      return useModalFormLayout(props)
    }

    if ('drawer' === like) {
      return useDrawerFormLayout(props)
    }

    return useViewFormLayout(props)
  }
