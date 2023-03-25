import {NextApiRequest} from "next";
import axios, {Method} from "axios";

const http = axios.create({
  baseURL: 'http://caddy',
})

export const backend = (req: NextApiRequest) => {
  const {url: path, body, method, cookies: {token}} = req

  const data = typeof body === 'string'
    ? JSON.parse(body || '{}')
    : body

  const headers = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json',
    'Authorization': `Bearer ${token}`
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
