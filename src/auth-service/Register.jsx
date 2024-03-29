import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, notification } from "antd";

import RegisterForm from "./RegisterForm";
import { baseUrl } from "../services/axios";

function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { password, username, phone, gender, email, age } = values;
    const requestData = {
      username,
      phone,
      gender,
      email,
      age,
      password,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/api/register/`,
        requestData
      );
      if ((response.statusText = "Created")) {
        notification.success({
          message: "User created",
          description: "Please sign in to continue.",
        });

        form.resetFields();
      }
    } catch (error) {
      notification.error({
        message: "Registration Failed",
        description: error?.response?.data ?? "Please register again!",
      });

      navigate("/login");
    }
  };

  return <RegisterForm onFinish={onFinish} />;
}

export default Register;
