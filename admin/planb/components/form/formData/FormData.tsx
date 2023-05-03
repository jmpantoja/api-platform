import React from "react";
import {FormAction} from "@refinedev/core";
import {UseFormDataReturnType} from "./useFormData";
import {WithChildren} from "./types";
import {PageForm, PageFormProps} from "./PageForm";
import {createErrorBag, ErrorBagContext} from "./useErrorBag";
import {ModalForm, ModalFormProps} from "./ModalForm";
import {DrawerForm, DrawerFormProps} from "./DrawerForm";
import {FormContext} from "./useFormContext";


export type FormDataProps = Omit<UseFormDataReturnType, 'show'>

export const FormData = ({like, children, ...props}: FormDataProps & WithChildren) => {
  const errorBag = createErrorBag(children)
  const {form} = props

  return <FormContext.Provider value={{
    action: (props.action as FormAction),
    like: like ?? 'view'
  }}>
    <ErrorBagContext.Provider value={errorBag}>
      {like === 'modal' && <ModalForm {...props as ModalFormProps}>{children}</ModalForm>}
      {like === 'drawer' && <DrawerForm {...props as DrawerFormProps}>{children}</DrawerForm>}
      {(like === 'view' || like === undefined) && <PageForm {...props as PageFormProps}>{children}</PageForm>}
    </ErrorBagContext.Provider>
  </FormContext.Provider>

}


