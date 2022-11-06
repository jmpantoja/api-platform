import {GetServerSideProps} from "next";
import {checkAuthentication, handleRefineParams, NextRouteComponent,} from "@pankod/refine-nextjs-router";
import {authProvider} from "@planb/provider/authProvider";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import dataProvider, {backend} from "@planb/provider/dataProvider";
import axios from "axios";
import {API_URL} from "~/config";


const http = axios.create({
  baseURL: 'http://caddy',
  timeout: 1000,
  // httpAgent: new httpAgent({ keepAlive: true }),
  // httpsAgent: new httpsAgent({ keepAlive: true }),
})

export const getServerSideProps: GetServerSideProps = async (context) => {

  const {resource, action, id} = handleRefineParams(context.params?.refine);

  const {isAuthenticated, ...props} = await checkAuthentication(
    authProvider,
    context
  );

  if (!isAuthenticated) {
    return {...props}
  }

  const i18nProps = await serverSideTranslations(context.locale ?? "es", [
    "common",
  ]);
  //
  // try {
  //   if (resource && action === "show" && id) {
  //     const data = await dataProvider.getOne({
  //       resource: resource.slice(resource.lastIndexOf("/") + 1),
  //       id,
  //     });
  //
  //     return {
  //       props: {
  //         initialData: data,
  //         ...i18nProps,
  //       },
  //     };
  //   } else if (resource && !action && !id) {
  //
  //     // const data = await dataProvider.getList({
  //     //   resource: resource.slice(resource.lastIndexOf("/") + 1),
  //     // });
  //
  //     const data = {
  //       data: [],
  //       total: 0
  //     }
  //     return {
  //       props: {
  //         initialData: data,
  //         ...i18nProps,
  //       },
  //     };
  //   }
  // } catch (error) {
  //   console.log(error)
  //
  //   return {
  //     props: {
  //       ...i18nProps,
  //     },
  //   };
  // }

  return {
    props: {
      ...i18nProps,
    }
  }
};

export default NextRouteComponent;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `NextRouteComponent` like the following:
 *
 * export default NextRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
