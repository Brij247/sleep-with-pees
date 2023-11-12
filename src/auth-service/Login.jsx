import { useNavigate } from "react-router-dom";
import { notification } from "antd";

import LoginForm from "./LoginForm";
import { axios } from "../services";

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/login/", values);
      const token = response?.data?.token;

      if (token) {
        document.cookie = `token=${token}; path=/`;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
