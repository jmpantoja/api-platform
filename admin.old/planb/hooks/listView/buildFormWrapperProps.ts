import {BuildFormWrapperProps, ButtonProps, FormWrapperProps} from "@planb/definitions/listView";
import {Entity} from "@planb/definitions/entity";
import {useDrawerForm, useModalForm} from "@pankod/refine-antd";


export type BuildCreateReturnType<TData> = {
  wrapperProps: FormWrapperProps<TData>
  buttonProps: ButtonProps<TData>
}

const buildFormWrapper = <TData extends Entity>(props?: BuildFormWrapperProps): BuildCreateReturnType<TData> => {

  const {mode, width, form, action} = (props || {} as BuildFormWrapperProps)

  if (mode === 'modal') {
    const {modalProps, formProps, show} = useModalForm<TData>({
      action
    })

    return {
      wrapperProps: {
        mode: 'modal',
        modalProps: {
          ...modalProps,

          width
        },
        formProps,
        form
      },
      buttonProps: {
        type: "primary",
        icon: null,
        size: "large",
        onClick: (record) => {
          show(record?.id)
        }
      }
    }
  }

  if (mode === 'drawer') {
    const {formProps, drawerProps, show, saveButtonProps} = useDrawerForm<TData>({
      action
    });

    return {
      wrapperProps: {
        action,
        mode: 'drawer',
        drawerProps: {
          ...drawerProps,
          width
        },
        saveButtonProps: {
          ...saveButtonProps,
          icon: null,
          size: "large",
        },
        formProps,
        form
      },
      buttonProps: {
        type: "primary",
        icon: null,
        size: "large",
        onClick: (record) => {
          show(record?.id)
        }
      }
    }
  }

  return {
    wrapperProps: {mode: 'none'},
    buttonProps: {
      type: "primary",
      icon: null,
      size: "large",
    }
  }
}

export default buildFormWrapper
