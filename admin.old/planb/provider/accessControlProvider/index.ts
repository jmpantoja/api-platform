import {authProvider} from "@planb/provider/authProvider";
import {IAccessControlContext} from "@pankod/refine-core";

export const accessControlProvider: Required<IAccessControlContext> = {
  can: async ({resource, action}) => {
    const rol = `ROLE_${resource}_${action}`.replace('/', '_').toUpperCase()
    const roles = await authProvider.getPermissions();

    return roles.includes(rol)
      ? {can: true}
      : {
        can: false,
        reason: "Unauthorized",
      }
  },
}

