import {LoginPage} from "@pankod/refine-antd";
import {GetServerSideProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const i18nProps = await serverSideTranslations(context.locale ?? "es", [
    "common",
  ]);


  return {
    props: {
      ...i18nProps,
    }
  }
}

export default LoginPage
