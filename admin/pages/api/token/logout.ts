import type {NextApiRequest, NextApiResponse} from 'next'
import {auth} from "@planb/provider/authProvider";
import {serialize} from 'cookie'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = serialize('token', 'deleted', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
  });

  const auth = serialize('auth', 'deleted', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
  });

  res.setHeader('Set-Cookie', [token, auth])
  res
    .status(200)
    .json({})
}
