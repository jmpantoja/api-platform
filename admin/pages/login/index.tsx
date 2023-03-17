    import { AuthPage } from "@refinedev/antd";
    
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Login() {
    return (
        <AuthPage
            type="login"
            formProps={{
                    initialValues: {
                        email: "demo@refine.dev",
                        password: "demodemo",
                    },
            }}
        />
    );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );

    return {
        props: {
            ...translateProps,
        },
    };
};
