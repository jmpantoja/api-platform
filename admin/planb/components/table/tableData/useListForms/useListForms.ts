import {FC} from "react";
import {FormDataProps} from "@planb/components/form";
import {BaseKey} from "@refinedev/core";
import {resolveActionForm} from "@planb/components/table/tableData/useListForms/resolveActionForm";


type ListForm = {
  modal: FC<FormDataProps>
  drawer?: never
} | {
  modal?: never
  drawer: FC<FormDataProps>
}

interface UseListFormsProps {
  resource: string
  edit?: ListForm
  create?: ListForm
}

type UseListFormsReturnType = {
  showEdit?: (id?: BaseKey) => void,
  editForm?: JSX.Element
  showCreate?: (id?: BaseKey) => void,
  createForm?: JSX.Element
}
export const useListForms = ({resource, edit, create}: UseListFormsProps): UseListFormsReturnType => {
  const {show: showEdit, form: editForm} = resolveActionForm({
    resource,
    action: 'edit',
    ...edit
  })

  const {show: showCreate, form: createForm} = resolveActionForm({
    resource,
    action: 'create',
    ...create
  })

  return {showEdit, editForm, showCreate, createForm}
}
