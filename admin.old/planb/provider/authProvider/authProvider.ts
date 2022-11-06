import {AuthProvider} from "@pankod/refine-core";
import localStorage from "react-secure-storage";
import {apiClient} from "@planb/provider/dataProvider";

import {checkTokens, refresh} from "./index";

type User = {
  username?: string
  roles?: string[]
}

const getUser = async (): Promise<User> => {
  const user = (localStorage.getItem('user') as User)

  if (user) {
    return Promise.resolve(user)
  }

  return apiClient.request({
    method: "POST",
    url: '/token/refresh'
  }).then((response) => {
    const {localUser} = response.data
    localStorage.setItem('user', localUser)
    return localUser
  })
}

export const authProvider: AuthProvider = {
  login: async ({username, password}) => {

    return apiClient.request({
      method: "POST",
      url: '/token/auth',
      data: {
        username,
        password
      }
    }).then((response) => {
      const {localUser} = response.data
      localStorage.setItem('user', localUser)
    })

  },
  logout: async () => {
    return apiClient.request({
      method: "POST",
      url: '/token/logout'
    }).then(() => {
      localStorage.removeItem('user')
    })
  },
  checkError: (error) => {
    if (error && error.statusCode === 401) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: async (ctx) => {
    const {token, refresh_token} = ctx?.req?.cookies || {token: undefined, refresh_token: undefined}
    const {valid, refresh: need_to_be_refresh} = checkTokens(token, refresh_token)

    if (need_to_be_refresh) {
      return await refresh(ctx.req, ctx.res)
    }

    return valid ? Promise.resolve() : Promise.reject()

  },
  getPermissions: async () => {
    return getUser()
      .then((user) => {
        return user.roles
      })

  },
  getUserIdentity: () => {
    return getUser();
  }
};
