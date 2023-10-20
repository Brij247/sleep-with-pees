import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button as AntdButton, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

function Login() {
  const navigate = useNavigate();
  const onFinish = () => {
    navigate("/dashboard");
  };
  return (
    <Form
      name="log-in"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={() => {
        navigate("/login");
      }}
      autoComplete="off"
    >
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

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;

const Button = styled(AntdButton)`
  width: 100%;
`;
