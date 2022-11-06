import axios, {AxiosResponse} from "axios";
import {API_URL} from "~/config";
import {NextApiRequest} from "next";
import {getRequestInfo} from "@planb/provider/authProvider";

const http = axios.create({
  baseURL: API_URL,
  timeout: 1000,
})

export const backend = (req: NextApiRequest): Promise<AxiosResponse> => {
  const {url, data, method, cookies:{token}} = getRequestInfo(req)

  const headers = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json',
    'Authorization': `Bearer ${token}`
  };

  return http.request({
    method,
    url,
    data,
    headers
  })

};


