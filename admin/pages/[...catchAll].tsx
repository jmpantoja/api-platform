import {ErrorComponent} from "@refinedev/antd";
import {GetServerSideProps} from "next";
import {authProvider} from "@planb/provider";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useResource} from "@refinedev/core";
import {ResourceRouteDefinition} from "@refinedev/core/dist/interfaces/bindings/resource"
import NoSSR from 'react-no-ssr';

export default function CatchAll() {
  const {resource, action} = useResource()

  if (resource && action) {

    const {component: NextComponent} = resource[action] as ResourceRouteDefinition

    if (NextComponent) {
      return <NoSSR>
        <NextComponent/>
      </NoSSR>
    }
  }
  return <ErrorComponent/>;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const {authenticated, redirectTo} = await authProvider.check(context);

  const translateProps = await serverSideTranslations(
    context.locale ?? "es",
    ["common"],
  );

  if (!authenticated) {
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: redirectTo,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};

