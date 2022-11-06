import {FormItemProps, FormProps} from "antd";
import {ReactElement} from "react";
import {FieldSetProps} from "@planb/components/formView/fieldset";
import {AnchorLinkProps} from "antd/lib/anchor/AnchorLink";
import {ErrorBag} from "@planb/context/errorBag";

interface BuildFormGroupsProps {
  Form: ReactElement<FormProps>
  errorBag: ErrorBag
}

interface FieldGropupByFieldSetProps {
  props: FieldSetProps,
  errorBag: ErrorBag
}

const fieldGropuByFieldSet = ({props, errorBag}: FieldGropupByFieldSetProps): AnchorLinkProps => {

  const className = errorBag.fieldsetHasErrors(props.children) ? 'error' : undefined

  return {
    title: props.label,
    href: `#${props.label}`,
    className,
  }
}

export const buildAnchorLinks = ({Form, errorBag}: BuildFormGroupsProps): AnchorLinkProps[] => {

  const children = Form.props.children as JSX.Element[]

  return children
    .filter((item: JSX.Element) => {
      return item.type.name === 'Fieldset'
    })
    .map((fieldSet: JSX.Element) => {
      return fieldGropuByFieldSet({props: fieldSet.props, errorBag})
    })

}
