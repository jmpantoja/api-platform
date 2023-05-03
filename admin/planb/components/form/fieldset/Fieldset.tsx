import React, {ReactNode} from "react";
import css from './style.module.less'
import classNames from "classnames";
import {useErrorBag} from "@planb/components/form";

export interface FieldsetProps {
  legend: string,
  id: string,
  children?: ReactNode | ReactNode[]
}

export const Fieldset = ({id, legend, children}: FieldsetProps) => {
  const {errorFieldsets} = useErrorBag()
  const error = errorFieldsets[id]

  const props = {
    className: classNames([
      css.fieldset,
      error ? 'error' : null
    ])
  }

  return <fieldset id={id} {...props}>
    <legend>{legend}</legend>
    <div className='field'>
      {children}
    </div>
  </fieldset>
}



