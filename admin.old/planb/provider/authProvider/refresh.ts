import axios, {AxiosResponse} from "axios";
import {API_URL} from "~/config";
import {getJwtInfo, getRequestInfo, JwtInfo, PATH_TO_REFRESH, setJwtCookies} from "./index";
import {NextApiRequest, NextApiResponse} from "next"

const http = axios.create({
  baseURL: API_URL,
})

export const refresh = (req: NextApiRequest, res: NextApiResponse): Promise<AxiosResponse<JwtInfo>> => {

  const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/ld+json'
  };

  const {cookies: {refresh_token}} = getRequestInfo(req)

  return http.request({
    method: "POST",
    url: PATH_TO_REFRESH,
    data: {
      refresh_token
    },
    headers
  })
    .then((response) => {
      const {cookies, localUser} = getJwtInfo(response)

      setJwtCookies(res, cookies)
      response.data = {
        localUser
      }
      return response
    })

};
