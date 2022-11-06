import {createContext, ReactElement, useContext} from 'react';
import {FormItemProps} from "antd";

interface ErrorBagProps {
  errorFields: string[],
  setErrorFields: (errors: string[]) => void
}

interface IErrorBag {
  get errors(): string[]

  set errors(errors: string[])


  get isNotEmpty(): boolean

  fieldsetHasErrors(children: ReactElement<FormItemProps>[] | ReactElement<FormItemProps>): boolean
}

export class ErrorBag implements IErrorBag {
  private readonly errorFields: string[];
  private readonly setErrorFields: (errors: string[]) => void;

  public constructor(props: ErrorBagProps) {
    this.errorFields = props.errorFields
    this.setErrorFields = props.setErrorFields
  }

  public get errors(): string[] {
    return this.errorFields
  }

  public set errors(errors: string[]) {
    if (this.errorFields.toString() !== errors.toString()) {
      this.setErrorFields(errors)
    }
  }

  public get isNotEmpty(): boolean {
    return this.errorFields.length > 0
  }

  public fieldsetHasErrors(children: ReactElement<FormItemProps>[] | ReactElement<FormItemProps>): boolean {

    const items = children instanceof Array ? children : [children]

    return  items
      .flat()
      .map(({props}: { props: FormItemProps }) => {
        return props.name as string
      })
      .some((field)=>{
        return this.errorFields.includes(field)
      })


  }
  //
  // public contains(fields: string[]): boolean {
  //   return fields.some((error) => {
  //     return this.errorFields.includes(error)
  //   })
  // }
}

export const ErrorBagContext = createContext<IErrorBag>(new ErrorBag({
  errorFields: [],
  setErrorFields: (errors: string[]) => {
  }
}));

const useErrorBag = (): IErrorBag => {
  return useContext<IErrorBag>(ErrorBagContext)
}

export default useErrorBag;
