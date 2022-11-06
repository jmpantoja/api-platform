import React from "react";
import {AppProps} from "next/app";
import {Refine} from "@pankod/refine-core";
import {ErrorComponent, notificationProvider, ReadyPage,} from "@pankod/refine-antd";
import "@styles/antd.less";

import {appWithTranslation, useTranslation} from "next-i18next";
import {accessControlProvider, authProvider, dataProvider, routerProvider, resourceProvider} from "@planb/provider";

import Dashboard from "@components/dashboard";
import {Footer, Header, Layout, OffLayoutArea, Sider, Title,} from "@components/ui";

import {resources as config} from "~/config/resources";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  const {t, i18n} = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  const resources = resourceProvider(config)

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
      resources={resources}
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
