import React from 'react';
import {Button, Form, Input} from "antd";

import styled from "@emotion/styled";

export const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <LoginForm
        name="basic"
        labelCol={{
            span: 6,
        }}
        wrapperCol={{
            span: 18,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="账号"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <UsernameInput/>
        </Form.Item>

        <Form.Item
            label="密码"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password/>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                登录
            </Button>
        </Form.Item>
    </LoginForm>
}

const UsernameInput = styled(Input)`

`

const LoginForm = styled(Form)`
  width: 40rem;
  height: 50rem;
  border: #e0e9ec 1px solid;
  border-radius: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25rem 0 0 -20rem;
  padding: 7rem 3rem;
`
