import {createContext, useContext} from "react";
import {ErrorBag} from "./errorBag";

export const ErrorBagContext = createContext<ErrorBag>({} as ErrorBag)

export const useErrorBag = (): ErrorBag => {
  return useContext<ErrorBag>(ErrorBagContext)
}
