import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";

import LoginForm from "./LoginForm";
import { baseUrl } from "../services/axios";

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseUrl}/api/login/`, values);
      const token = response?.data?.token;

      if (token) {
        document.cookie = `token=${token}; path=/`;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
        notification.success({
          message: "Login Successful",
          description: "You have successfully logged in.",
        });
        navigate("/dashboard");
      } else {
        notification.error({
          message: "Login Failed",
          description: "Invalid API response",
        });
        navigate("/login");
      }
    } catch (error) {
      notification.error({
        message: "Login Failed",
        description: "Please check your username and password.",
      });
      navigate("/login");
    }
  };

  return <LoginForm onFinish={onFinish} />;
}

export default Login;
