import React, {ReactElement} from "react";
import {FormItemProps} from "antd";
import styles from './styles.module.less'
import useErrorBag from "@planb/context/errorBag";
import classNames from "classnames";


export interface FieldSetProps {
  label: string,
  status?: undefined | 'Error'
  children: ReactElement<FormItemProps>[] | ReactElement<FormItemProps>
}

const Fieldset = ({label, children}: FieldSetProps) => {
  const errorBag = useErrorBag();

  const args = [
    styles.fieldset,
    errorBag.fieldsetHasErrors(children) ? styles.fieldsetError : null
  ];

  const className = classNames(args)

  return <fieldset id={label} className={className}>
    <legend>{label}</legend>
    <div className={'fieldset-body'}>
      {children}
    </div>
  </fieldset>
}

export default Fieldset


