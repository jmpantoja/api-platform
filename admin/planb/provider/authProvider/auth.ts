import {NextApiRequest} from "next";
import axios, {Method} from "axios";

const http = axios.create({
  baseURL: 'http://caddy',
})

export const login = (req: NextApiRequest) => {
  const {url: path, body, method} = req

  const data = typeof body === 'string'
    ? JSON.parse(body || '{}')
    : body

  const headers = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json',
  };

  return http.request({
    method: method as Method,
    url: path,
    data,
    headers
  }).catch((error) => {
    const status = error?.response?.status || 500
    const data = error.response?.data || error

    return Promise.reject({
      status,
      data
    });
  })
}
