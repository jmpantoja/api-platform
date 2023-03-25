import {AuthBindings} from "@refinedev/core";
import nookies from "nookies";
import {proxy} from "@planb/provider/dataProvider";

const parseUser = () => {
  const cookies = nookies.get();
  const auth = cookies['auth']
  return auth ? JSON.parse(atob(auth)) : null
}

const parseRedirect = (redirectTo: string = '/') => {
  return {
    success: true,
    redirectTo,
  }
}

const parseError = (message: string) => {
  return {
    success: false,
    error: {
      name: 'Error Login',
      message: message
    }
  }
}

const parseAuthenticated = (token: string) => {
  return token ? {
    authenticated: true,
  } : {
    authenticated: false,
    logout: true,
    redirectTo: "/login",
  }
}

export const authProvider: AuthBindings = {
  login: async ({email, username, password, remember}) => {
    return proxy.post('token/auth', {
      username,
      password
    })
      .then((response) => {
        return parseRedirect()
      })
      .catch((error) => {
        return parseError(error.message)
      })
  },
  logout: async () => {
    return proxy.get('token/logout')
      .then(() => {
        return parseRedirect('/login')
      })
  },
  check: async (ctx: any) => {
    const cookies = nookies.get(ctx);
    return parseAuthenticated(cookies["token"])
  },
  getPermissions: async () => {
    return parseUser()?.roles

  },
  getIdentity: async () => {
    return parseUser()
  },
  onError: async (error) => {
    return {error};
  },
};
