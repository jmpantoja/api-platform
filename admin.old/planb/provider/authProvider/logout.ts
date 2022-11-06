import axios, {AxiosResponse} from "axios";
import {API_URL} from "~/config";
import {NextApiResponse} from "next";
import {deleteJwtCookies, localStorage, PATH_TO_LOGOUT, RequestInfo, stringify} from "./index";

const http = axios.create({
  baseURL: API_URL,
})

export const postLogout = () => {
  localStorage.removeItem('user')
}

export const logout = ({cookies}: RequestInfo, res: NextApiResponse): Promise<AxiosResponse> => {
  const {refresh_token} = cookies

  const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const data = stringify({
    refresh_token
  })

  return http.request({
    method: "POST",
    url: PATH_TO_LOGOUT,
    data,
    headers
  })
    .then((response) => {
      deleteJwtCookies(res)
      return response
    })

};
