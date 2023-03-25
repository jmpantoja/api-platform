import type {NextApiRequest, NextApiResponse} from 'next'
import {auth} from "@planb/provider/authProvider";
import {serialize} from 'cookie'
import {decode, JwtPayload} from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  auth.login(req)
    .then(({status, data}) => {
      const jwt = decode(data.token) as JwtPayload
      const exp = new Date(jwt.exp as number * 1000)
      const user = btoa(JSON.stringify(jwt))

      const tokenCookie = serialize('token', data.token, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        expires: exp
      });

      const authCookie = serialize('auth', user, {
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: "lax",
        expires: exp
      });

      res.setHeader('Set-Cookie', [tokenCookie, authCookie])
      res
        .status(status)
        .json(data)

    })
    .catch(({status, data}) => {
      res
        .status(status)
        .json(data)
    })
}
