import {
  LockOutlined,
  MobileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button as AntdButton, Input, Form, Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

function Register() {
  const [form] = Form.useForm();

  return (
    <Form
      name="register"
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Email" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item
        name="password2"
        dependencies={["password"]}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input placeholder="Confirm Password" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          placeholder="Phone Number"
          style={{
            width: "100%",
          }}
          prefix={<MobileOutlined />}
        />
      </Form.Item>
      <Form.Item
        name="gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">
            <TeamOutlined />
            {` Male`}
          </Option>
          <Option value="female">
            <TeamOutlined />
            {` Female`}
          </Option>
          <Option value="other">
            <TeamOutlined /> {` Other`}
          </Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register;

const Button = styled(AntdButton)`
  width: 100%;
`;
