import React from "react";
import {AppProps} from "next/app";
import {Refine} from "@pankod/refine-core";
import {ErrorComponent, notificationProvider, ReadyPage,} from "@pankod/refine-antd";
import routerProvider from "../planb/provider/routerProvider";
import "@styles/antd.less";

import {appWithTranslation, useTranslation} from "next-i18next";
import {authProvider} from "@planb/provider/authProvider";
import dataProvider from "../planb/provider/dataProvider";


import {Footer, Header, Icon, Layout, OffLayoutArea, Sider, Title,} from "@components/ui";

import {BookList, BookEdit, TagList, BookCreate} from "@components/crud";
import Dashboard from "@components/dashboard";
import accessControlProvider from "../planb/provider/accessControlProvider";


function MyApp({Component, pageProps}: AppProps): JSX.Element {
  const {t, i18n} = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      accessControlProvider={accessControlProvider}
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent/>}
      dataProvider={dataProvider}
      authProvider={authProvider}
      DashboardPage={Dashboard}
      resources={[
        {
          name: "bookstore/books",
          list: BookList,
          edit: BookEdit,
          create: BookCreate,
          icon: <Icon.Books/>,
          canDelete: true,
          options: {
            route: 'data/bookstore/books',
          }
        },
        {
          name: "bookstore/tags",
          list: TagList,
          icon: <Icon.Tags/>,
          canDelete: true,
          options: {
            route: 'data/bookstore/tags',
          }
        }
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      i18nProvider={i18nProvider}
      syncWithLocation={true}
      options={{
        warnWhenUnsavedChanges: false,
        disableTelemetry: true,
        syncWithLocation: false
      }}
    >
      <Component {...pageProps} />
    </Refine>
  );
}


const App = (props: AppProps) => {
  return <React.StrictMode>
    <React.Suspense fallback="loading">
      <MyApp {...props}/>
    </React.Suspense>
  </React.StrictMode>
}

export default appWithTranslation(App);
