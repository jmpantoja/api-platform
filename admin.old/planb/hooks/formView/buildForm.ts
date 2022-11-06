import {FormProps} from "antd";
import {FormInstance} from "@pankod/refine-antd";
import {ReactElement} from "react";
import useLayout from "@contexts/layout";
import {ErrorBag} from "@planb/context/errorBag";

interface BuildFormProps {
  form: (props: FormProps) => JSX.Element
  formProps: FormProps
  formInstance: FormInstance
  errorBag: ErrorBag
}

const errorsByFormInstance = (formInstance: FormInstance): string[] => {

  return formInstance.getFieldsError()
    .filter((field) => {
      return field.errors.length > 0
    })
    .map((field) => {
      return field.name.map(name => name as string)
    })
    .flat()

}

export const buildForm = ({form, formProps, formInstance, errorBag}: BuildFormProps): ReactElement<FormProps> => {

  return form({
    ...formProps,
    form: formInstance,
    onFieldsChange: () => {
      const errors = errorsByFormInstance(formInstance).sort()
      errorBag.errors = errors
    }
  })
}

