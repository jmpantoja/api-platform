import React, {createContext, ReactNode, useContext} from "react";
import {Breadcrumb, Drawer, Form, FormProps, Modal} from "antd";
import {FieldData} from "rc-field-form/es/interface";
import {createErrorBag, ErrorBag} from "@planb/components/form/errorBag";
import {
  UseFormDrawerReturnType,
  UseFormLayoutReturnType,
  UseFormModalReturnType,
  UseFormViewReturnType
} from "@planb/components/form/useFormLayout";
import {Create, Edit, ListButton, RefreshButton} from "@refinedev/antd";
import {FormAction, useBreadcrumb, useRefineContext} from "@refinedev/core";
import css from "./style.module.less"
import classNames from "classnames";


interface WithChildren {
  children?: FormProps['children']
}

type SingleFormProps = { formProps: FormProps } & WithChildren;

const SingleForm = ({children, formProps}: SingleFormProps) => {
  const errorBag = useErrorBag()
  const onFieldsChange = (_: FieldData[], allFields: FieldData[]) => {
    errorBag.update(allFields)
  }
  return <Form layout={'vertical'} {...formProps} onFieldsChange={onFieldsChange}>
    {children as ReactNode}
  </Form>;
}

type ModalFormProps = UseFormModalReturnType & WithChildren;
const ModalForm = ({modalProps, ...props}: ModalFormProps) => {

  return <Modal {...modalProps} className={css.modalForm}>
    <SingleForm {...props as SingleFormProps}/>
  </Modal>
}

type DrawerFormProps = UseFormDrawerReturnType & WithChildren;
const DrawerForm = ({drawerProps, ...props}: DrawerFormProps) => {
  return <Drawer {...drawerProps} className={css.drawerForm}>
    <ViewForm {...props as ViewFormProps}/>
  </Drawer>
}

export type ViewFormProps = Omit<UseFormViewReturnType, 'like'> & WithChildren;
export const ViewForm = ({action, resource, saveButtonProps: saveButton, ...props}: ViewFormProps) => {

  const {like} = useFormContext()
  const noIcon = {
    icon: false
  }
  const saveButtonProps = {
    ...saveButton,
    ...noIcon
  }

  const wrapperProps = {
    className: classNames(css.formView, like)
  }

  if (action === 'create') {
    return <Create resource={resource} saveButtonProps={saveButtonProps} wrapperProps={wrapperProps}>
      <SingleForm {...props as SingleFormProps}/>
    </Create>
  }
  return <Edit resource={resource} saveButtonProps={saveButtonProps} deleteButtonProps={noIcon}
               wrapperProps={wrapperProps}
               headerButtons={[]}>
    <SingleForm {...props as SingleFormProps}/>
  </Edit>
}

interface IFormContext {
  action: FormAction,
  like: 'view' | 'modal' | 'drawer'
}

const FormContext = createContext<IFormContext>({} as IFormContext)
const ErrorBagContext = createContext<ErrorBag>({} as ErrorBag)

export type FormLayoutProps = Omit<UseFormLayoutReturnType, 'show'>
export const FormLayout = ({like, children, ...props}: FormLayoutProps & WithChildren) => {

  const errorBag = createErrorBag(children)
  return <FormContext.Provider value={{
    action: (props.action as FormAction),
    like: like ?? 'view'
  }}>
    <ErrorBagContext.Provider value={errorBag}>
      {like === 'modal' && <ModalForm {...props as ModalFormProps}>{children}</ModalForm>}
      {like === 'drawer' && <DrawerForm {...props as DrawerFormProps}>{children}</DrawerForm>}
      {(like === 'view' || like === undefined) && <ViewForm {...props as ViewFormProps}>{children}</ViewForm>}
    </ErrorBagContext.Provider>
  </FormContext.Provider>
}

export const useErrorBag = (): ErrorBag => {
  return useContext<ErrorBag>(ErrorBagContext)
}

export const useFormContext = (): IFormContext => {
  return useContext<IFormContext>(FormContext)
}


