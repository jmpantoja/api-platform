import React from "react";
import {AppProps} from "next/app";
import type {NextPage} from "next";
import {Refine} from '@refinedev/core';
import {RefineKbar, RefineKbarProvider} from "@refinedev/kbar";
import {notificationProvider} from '@refinedev/antd';
import routerProvider, {UnsavedChangesNotifier} from "@refinedev/nextjs-router";

import "@refinedev/antd/dist/reset.css";

import {appWithTranslation, useTranslation} from "next-i18next";
import {ColorModeContextProvider} from "@contexts";
import {accessControlProvider, authProvider, dataProvider} from "@planb/provider";
import {Layout} from "@components/layout/layout";
import Dashboard from "@components/dashboard";
import {BookCreate, BookEdit, BookList, BookShow} from "@components/crud/books";
import {TagCreate, TagEdit, TagList, TagShow} from "@components/crud/tags";

import {AuthorCreate, AuthorEdit, AuthorList, AuthorShow} from "@components/crud/authors";


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
      <Layout>
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
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            dataProvider={dataProvider()}
            notificationProvider={notificationProvider}
            accessControlProvider={accessControlProvider(authProvider)}
            resources={[
              {
                name: 'dashboard',
                list: {
                  path: '/dashboard',
                  component: Dashboard
                }
              },
              {
                name: "bookstore/books",
                list: {
                  path: "bookstore/books",
                  component: BookList
                },
                create: {
                  path: "bookstore/books/create",
                  component: BookCreate
                },
                edit: {
                  path: "bookstore/books/edit/:id",
                  component: BookEdit
                },
                show: {
                  path: "bookstore/books/show/:id",
                  component: BookShow
                },
                meta: {
                  canDelete: true,
                  parent: 'bookstore'
                }
              },
              {
                name: "bookstore/authors",
                list: {
                  path: "bookstore/authors",
                  component: AuthorList
                },
                create: {
                  path: "bookstore/authors/create",
                  component: AuthorCreate
                },
                edit: {
                  path: "bookstore/authors/edit/:id",
                  component: AuthorEdit
                },
                show: {
                  path: "bookstore/authors/show/:id",
                  component: AuthorShow
                },
                meta: {
                  canDelete: true,
                  parent: 'bookstore'
                }
              },
              {
                name: "bookstore/tags",
                list: {
                  path: "bookstore/tags",
                  component: TagList
                },
                create: {
                  path: "bookstore/tags/create",
                  component: TagCreate
                },
                edit: {
                  path: "bookstore/tags/edit/:id",
                  component: TagEdit
                },
                show: {
                  path: "bookstore/tags/show/:id",
                  component: TagShow
                },
                meta: {
                  canDelete: true,
                  parent: 'bookstore'
                }
              }

            ]}


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
