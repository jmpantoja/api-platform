import {Entity} from "@planb/definitions/entity";
import {FormProps} from "antd";
import {AnchorProps, useForm} from "@pankod/refine-antd";
import {EditProps} from "@pankod/refine-antd/dist/components/crud/edit";
import {buildEdit} from "@planb/hooks/formView/buildEdit";
import {ReactElement, useState} from "react";
import {buildForm} from "@planb/hooks/formView/buildForm";
import {buildAnchor} from "@planb/hooks/formView/buildAnchor";
import {buildAnchorLinks} from "@planb/hooks/formView/buildAnchorLinks";
import {AnchorLinkProps} from "antd/lib/anchor/AnchorLink";
import {ErrorBag} from "@planb/context/errorBag";

interface UseFormViewProps<TData> {
  form: (props: FormProps) => JSX.Element
}

interface UseFormViewReturnType<TData extends Entity> {
  anchorProps: AnchorProps,
  editProps: EditProps,
  Form: ReactElement<FormProps>
  links: AnchorLinkProps[],
  errorBag: ErrorBag
}

export const useFormView = <TData extends Entity>({form}: UseFormViewProps<TData>): UseFormViewReturnType<TData> => {

  const [errorFields, setErrorFields] = useState<string[]>([])

  const errorBag = new ErrorBag({
    errorFields,
    setErrorFields
  })

  const {formProps, saveButtonProps, form: formInstance} = useForm<TData>();
  const anchorProps = buildAnchor()

  const editProps = buildEdit({
    saveButtonProps,
    errorBag
  })

  const Form = buildForm({
    form,
    formProps,
    formInstance,
    errorBag
  })

  const links = buildAnchorLinks({Form, errorBag})

  return {
    anchorProps,
    editProps,
    Form,
    links,
    errorBag
  }
}
