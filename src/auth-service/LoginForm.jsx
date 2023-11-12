import { Button as AntdButton, Form, Input } from "antd";
import styled from "styled-components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

function LoginForm({ onFinish }) {
  return (
    <Form name="login" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="username" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;

const Button = styled(AntdButton)`
  width: 100%;
`;
