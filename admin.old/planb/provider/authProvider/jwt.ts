import {NextApiResponse} from "next";
import {serialize} from "cookie";
import {AxiosResponse} from "axios";
import {decode, JwtPayload} from "jsonwebtoken";

export type CookieInfo = {
  name: string,
  value: string,
  secondsToExpire?: number
}

export const setJwtCookies = (res: NextApiResponse, cookies: CookieInfo[]) => {

  const data = cookies.map(({name, value, secondsToExpire}: CookieInfo) => {
    const expires = secondsToExpire ? new Date(secondsToExpire * 1000) : undefined;

    return serialize(name, value, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires,
    })
  })

  res.setHeader('Set-Cookie', data)
}

export const deleteJwtCookies = (res: NextApiResponse) => {

  const data = ['token', 'refresh_token'].map((name: string) => {
    return serialize(name, 'deleted', {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(0),
    })
  })

  res.setHeader('Set-Cookie', data)
}

export type JwtInfo = {
  cookies: CookieInfo[],
  localUser?: object
}

export const getJwtInfo = (response: AxiosResponse): JwtInfo => {
  const {data: {token, refresh_token, refresh_token_expiration}} = response
  const {iat, exp, ...localUser} = (decode(token) as JwtPayload)

  return {
    cookies: [
      {name: 'token', value: token, secondsToExpire: exp},
      {name: 'refresh_token', value: refresh_token, secondsToExpire: refresh_token_expiration},
    ],
    localUser
  }
}

type CheckTokensReturn = {
  valid: boolean,
  refresh: boolean
}

const isValidToken = (token?: string): boolean => {
  if (!token) {
    return false
  }
  const {exp} = (decode(token) as JwtPayload)
  const now = new Date().getTime()

  return ((exp as number) * 1000) > now
}

export const checkTokens = (token?: string, refresh_token?: string): CheckTokensReturn => {
  const valid = isValidToken(token);
  const refresh = !valid && (typeof refresh_token === 'string')

  return {
    valid,
    refresh
  }
}
