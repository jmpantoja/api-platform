import axios, {AxiosResponse} from "axios";
import {API_URL} from "~/config";
import {NextApiResponse} from "next";
import {getJwtInfo, JwtInfo, PATH_TO_LOGIN, RequestInfo, setJwtCookies} from "./index";

const http = axios.create({
  baseURL: API_URL,
})

export const login = ({data}: RequestInfo, res: NextApiResponse): Promise<AxiosResponse<JwtInfo>> => {

  const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/ld+json'
  };

  return http
    .request({
      method: "POST",
      url: PATH_TO_LOGIN,
      data,
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

