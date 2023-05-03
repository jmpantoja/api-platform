import {BaseRecord, FormAction, HttpError, useResource} from "@refinedev/core";
import {useFormDataModal, UseFormModalProps, UseFormModalReturnType} from "./useFormModal";
import {useFormDataDrawer, UseFormDrawerProps, UseFormDrawerReturnType} from "./useFormDrawer";
import {useFormDataPage, UseFormPageProps, UseFormPageReturnType} from "./useFormPage";

type UseFormDataProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> = UseFormPageProps<TData, TError, TVariables, TSelectData>
  | UseFormModalProps<TData, TError, TVariables, TSelectData>
  | UseFormDrawerProps<TData, TError, TVariables, TSelectData>


export type UseFormDataReturnType<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
  TSelectData extends BaseRecord = TData,
> = UseFormPageReturnType<TData, TError, TVariables, TSelectData>
  | UseFormModalReturnType<TData, TError, TVariables, TSelectData>
  | UseFormDrawerReturnType<TData, TError, TVariables, TSelectData>


export const useFormData =
  <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables = {}, TSelectData extends BaseRecord = TData>
  ({...props}: UseFormDataProps<TData, TError, TVariables, TSelectData>)
    : UseFormDataReturnType<TData, TError, TVariables, TSelectData> => {

    props = props ?? {}
    const {action, id} = useResource();
    const {like} = props

    props = {
      ...props,
      action: props.action ?? (action as FormAction),
      id: props.id ?? id,
    }

    if ('modal' === like) {
      return useFormDataModal({
          redirect: false,
          autoSubmitClose: true,
          ...props,
        }
      )
    }

    if ('drawer' === like) {
      return useFormDataDrawer({
        redirect: false,
        autoSubmitClose: true,
        ...props
      })
    }

    return useFormDataPage(props)
  }
