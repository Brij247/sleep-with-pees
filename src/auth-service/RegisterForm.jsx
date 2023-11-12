import {
  LockOutlined,
  MobileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button as AntdButton, Input, Form, Select, InputNumber } from "antd";
import styled from "styled-components";
const { Option } = Select;

const RegisterForm = ({ onFinish }) => {
  const validatePhoneNumber = (rule, value, callback) => {
    if (!value) {
      callback("Please enter a phone number");
    } else if (!/^\d{10}$/.test(value)) {
      callback("Please enter a valid 10-digit phone number");
    } else {
      callback();
    }
  };

  return (
    <Form name="register" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Username" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
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
        name="phone"
        rules={[
          {
            validator: validatePhoneNumber,
          },
        ]}
      >
        <Input
          placeholder="Phone Number"
          style={{
            width: "100%",
          }}
          prefix={<MobileOutlined />}
          type="tel"
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
          <Option value="Male">
            <TeamOutlined />
            {` Male`}
          </Option>
          <Option value="Female">
            <TeamOutlined />
            {` Female`}
          </Option>
          <Option value="Other">
            <TeamOutlined /> {` Other`}
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="age"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
          placeholder="age"
          min={2}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
const Button = styled(AntdButton)`
  width: 100%;
`;
