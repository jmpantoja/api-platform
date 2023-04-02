import React from "react";
import {useLogin} from "@refinedev/core";
import {Button, Card, Col, Form, Input, Layout as AntdLayout, Row, theme, Typography} from "antd";
import Icon from "@components/icon";
import {GetServerSideProps} from "next";
import {authProvider} from "@planb/provider";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


const {Title} = Typography;


export interface ILoginForm {
  username: string;
  password: string;
  remember: boolean;
}

export default function Login() {
  const {token: {colorPrimary}} = theme.useToken()

  const [form] = Form.useForm<ILoginForm>();

  const {mutate: login} = useLogin<ILoginForm>();

  const CardTitle = (
    <Title level={3} className="title">
      Sign in your account
    </Title>
  );


  return (
    <AntdLayout className="layout">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col xs={8}>
          <div className="container">
            <div className="imageContainer">
              <Icon.Logo fill={colorPrimary}/>
            </div>
            <Card title={CardTitle} headStyle={{borderBottom: 0}}>
              <Form<ILoginForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
                }}
                requiredMark={false}
                initialValues={{
                  remember: false,
                }}
              >
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[{required: true}]}
                >
                  <Input
                    size="large"
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{required: true}]}
                  style={{marginBottom: "12px"}}
                >
                  <Input
                    type="password"
                    placeholder="●●●●●●●●"
                    size="large"
                  />
                </Form.Item>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  block
                >
                  Sign in
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
}

Login.noLayout = true

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const {authenticated, redirectTo} = await authProvider.check(context);

  const translateProps = await serverSideTranslations(
    context.locale ?? "es",
    ["common"],
  );

  return {
    props: {
      ...translateProps,
    },
  };
};
