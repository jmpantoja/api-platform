import {
  AuthBindings,
  BaseKey,
  CanParams,
  CanReturnType,
  IAccessControlContext,
  IResourceItem,
  usePermissions
} from "@refinedev/core";


const accessControlProvider = ({getPermissions}: AuthBindings): Required<IAccessControlContext> => {

  return {
    can: async ({resource, action, params}: CanParams) => {
      const roles = (getPermissions ? await getPermissions() : []) as string[]
      const role = `ROLE_${resource?.replace('/', '_')}_${action}`.toUpperCase()

      if(roles.includes(role)){
        return {can: true};
      }

      return {
        can: false,
        reason: "Unauthorized",
      };
    }
  }
}

// const accessControlProvider: Required<IAccessControlContext> = {
//
//   can: async ({resource, action, params}) => {
//
//     const {data: roles} = usePermissions();
//
//     console.log({resource, action}, {roles})
//
//     if (resource === "posts" && action === "edit") {
//       return {
//         can: false,
//         reason: "Unauthorized",
//       };
//     }
//
//     return {can: true};
//   },
//
//
// };

export {accessControlProvider};
