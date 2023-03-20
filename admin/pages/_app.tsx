import React from "react";
import {AppProps} from "next/app";
import type {NextPage} from "next";
import {Refine,} from '@refinedev/core';
import {RefineKbar, RefineKbarProvider} from "@refinedev/kbar";
import {Layout, notificationProvider} from '@refinedev/antd';
import routerProvider, {UnsavedChangesNotifier} from "@refinedev/nextjs-router";

// import dataProvider from "@refinedev/simple-rest";
import "@refinedev/antd/dist/reset.css";

import {appWithTranslation, useTranslation} from "next-i18next";
import {Header, Sider} from "@components/ui"
import {ColorModeContextProvider} from "@contexts";
import {authProvider, dataProvider} from "@planb/provider";
import {
  ProductCreate,
  ProductEdit,
  ProductList,
  ProductShow,
  CategoryList,
  CategoryCreate,
  CategoryShow,
  CategoryEdit
} from "@components/crud";

// const API_URL = "https://api.fake-rest.refine.dev";
const API_URL = "https://www.prueba.local/api";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({Component, pageProps}: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <Layout Header={Header} Sider={Sider}>
        <Component {...pageProps} />
      </Layout>
    );
  };

  const {t, i18n} = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            notificationProvider={notificationProvider}
            resources={[
              // {
              //   name: "products",
              //   list: {
              //     path: "/products",
              //     component: ProductList
              //   },
              //   create: {
              //     path: "/products/create",
              //     component: ProductCreate
              //   },
              //   edit: {
              //     path: "/products/edit/:id",
              //     component: ProductEdit
              //   },
              //   show: {
              //     path: "/products/show/:id",
              //     component: ProductShow
              //   },
              //   canDelete: true,
              // },
              // {
              //   name: "categories",
              //   list: {
              //     path: "/categories",
              //     component: CategoryList
              //   },
              //   create: {
              //     path: "/categories/create",
              //     component: CategoryCreate
              //   },
              //   edit: {
              //     path: "/categories/edit/:id",
              //     component: CategoryEdit
              //   },
              //   show: {
              //     path: "/categories/show/:id",
              //     component: CategoryShow
              //   },
              //   canDelete: true,
              // },
              {
                name: "bookstore/tags",
                list: {
                  path: "/tags",
                  component: CategoryList
                },
                create: {
                  path: "/tags/create",
                  component: CategoryCreate
                },
                edit: {
                  path: "/tags/edit/:id",
                  component: CategoryEdit
                },
                show: {
                  path: "/tags/show/:id",
                  component: CategoryShow
                },
                canDelete: true,
              },

            ]}
            authProvider={authProvider}
            i18nProvider={i18nProvider}

            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            {renderComponent()}
            <RefineKbar/>
            <UnsavedChangesNotifier/>
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </>
  );
};


export default appWithTranslation(MyApp);
