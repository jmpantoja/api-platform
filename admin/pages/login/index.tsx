import React from "react";
import {useLogin} from "@refinedev/core";
import {Button, Card, Col, Form, Input, Layout as AntdLayout, Row, Typography, theme} from "antd";
import Icon from "@components/icon";
import {serialize} from 'cookie'


const {Text, Title} = Typography;


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
                {/*<div style={{ marginBottom: "12px" }}>*/}
                {/*  <Form.Item*/}
                {/*    name="remember"*/}
                {/*    valuePropName="checked"*/}
                {/*    noStyle*/}
                {/*  >*/}
                {/*    <Checkbox*/}
                {/*      style={{*/}
                {/*        fontSize: "12px",*/}
                {/*      }}*/}
                {/*    >*/}
                {/*      Remember me*/}
                {/*    </Checkbox>*/}
                {/*  </Form.Item>*/}

                {/*  <a*/}
                {/*    style={{*/}
                {/*      float: "right",*/}
                {/*      fontSize: "12px",*/}
                {/*    }}*/}
                {/*    href="#"*/}
                {/*  >*/}
                {/*    Forgot password?*/}
                {/*  </a>*/}
                {/*</div>*/}
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  block
                >
                  Sign in
                </Button>
              </Form>
              {/*<div style={{ marginTop: 8 }}>*/}
              {/*  <Text style={{ fontSize: 12 }}>*/}
              {/*    Don’t have an account?{" "}*/}
              {/*    <a href="#" style={{ fontWeight: "bold" }}>*/}
              {/*      Sign up*/}
              {/*    </a>*/}
              {/*  </Text>*/}
              {/*</div>*/}
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
}

Login.noLayout = true

