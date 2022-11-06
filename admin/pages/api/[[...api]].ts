import {NextApiRequest, NextApiResponse} from "next";

import {PATH_TO_LOGIN, PATH_TO_LOGOUT, PATH_TO_REFRESH, backend, refresh, login, logout, getRequestInfo} from "@planb";

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  const info = getRequestInfo(req)

  switch (info.url) {
    case PATH_TO_LOGIN:
      return login(info, res)
    case PATH_TO_LOGOUT:
      return logout(info, res)
    case PATH_TO_REFRESH:
      return refresh(req, res)
    default:
      return backend(req)
  }
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {

  return handleRequest(_req, res)
    .then((response) => {
      return res
        .status(response.status)
        .json(response.data)
    })
    .catch((error) => {
      const status = error?.response?.status || 500
      const response = error.response?.data || error

      return res.status(status)
        .json(response)
    })
}
