import {Form, Modal, useModalForm} from "@pankod/refine-antd";
import {FormDataProps} from "@planb/components";
import {FormAction} from "@pankod/refine-core";

export interface ModalFormDataProps extends Omit<FormDataProps, 'wrapper'> {
  action: FormAction
}

export const ModalFormData = ({children, handler, ...props}: ModalFormDataProps) => {

  const {formProps, modalProps, show} = useModalForm({...props})

  const AA = handler
  // const AA = handler

  return <>
    {handler && handler({show})}
    <Modal {...modalProps}>
      <Form {...formProps} >
        {children}
      </Form>
    </Modal>
  </>
}
