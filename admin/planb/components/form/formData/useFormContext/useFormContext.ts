import {createContext, useContext} from "react";
import {FormAction} from "@refinedev/core";

interface IFormContext {
  action: FormAction,
  like: 'view' | 'modal' | 'drawer'
  // isValid: boolean
}

export const FormContext = createContext<IFormContext>({} as IFormContext)
export const useFormContext = (): IFormContext => {
  return useContext<IFormContext>(FormContext)
}
