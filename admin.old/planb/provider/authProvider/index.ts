import {Method} from "axios";
import {NextApiRequest} from "next";
import localStorage from "react-secure-storage";
import {stringify} from "query-string";

export * from './authProvider'
export * from './login'
export * from './logout'
export * from './refresh'
export * from './jwt'

export const PATH_TO_LOGIN = '/token/auth'
export const PATH_TO_LOGOUT = '/token/logout'
export const PATH_TO_REFRESH = '/token/refresh'

export {
  localStorage,
  stringify
}

export type RequestInfo = {
  url: string,
  data?: object,
  method: Method,
  cookies: {
    token?: string,
    refresh_token?: string,
  }
}

export const getRequestInfo = (req: NextApiRequest): RequestInfo => {
  const {url: path, body, method, cookies: {token, refresh_token}} = req
  const url = path?.replace(/^\/api/, '') as string

  const data = 'string' === typeof body
    ? JSON.parse(body || '{}')
    : body

  const cookies = (token || refresh_token)
    ? {
      token,
      refresh_token
    }
    : {}

  return {
    url,
    method: method as Method,
    data,
    cookies
  }
}
