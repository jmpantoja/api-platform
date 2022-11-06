import {FormWrapperProps} from "@planb/definitions/listView";
import {Drawer, Create, Edit, Modal} from "@pankod/refine-antd";
import styles from './styles.module.less'

function FormWrapper<TData>(props: FormWrapperProps<TData>) {

  if (props.mode === 'modal') {
    const {modalProps, formProps, form: Form} = props;
    return <Modal {...modalProps}>
      <Form {...formProps} />
    </Modal>
  }

  if (props.mode === 'drawer') {
    const {drawerProps, saveButtonProps, formProps, form: Form, action} = props;

    return <Drawer {...drawerProps} className={styles.drawerWrapper}>
      {action === 'create' && <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} />
      </Create>}

      {action === 'edit' && <Edit saveButtonProps={saveButtonProps} headerButtons={[]} canDelete={false}>
        <Form {...formProps} />
      </Edit>}

    </Drawer>
  }

  return <></>
}

export default FormWrapper
