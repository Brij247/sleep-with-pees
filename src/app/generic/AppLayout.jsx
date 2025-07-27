import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";
import {
  BookOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  LogoutOutlined,
  PlayCircleOutlined,
  TrophyOutlined,
  UserOutlined,
  ReadOutlined,
  HomeOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

import Profile from "./Profile";
// import { baseUrl } from "../../services/axios";

const { Sider, Content } = Layout;

function AppLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState("/dashboard");

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  const handleMenu = (props) => {
    navigate(props.key);
    setSelectedKey(props.key);
  };

  let items = [
    { key: "/dashboard", label: "Dashboard", icon: <HomeOutlined /> },
    { key: "/sleep-diary", label: "Sleep diary", icon: <BookOutlined /> },
    {
      key: "/my-diet",
      label: "My diet and physical activity",
      icon: <UserOutlined />,
    },
    {
      key: "/my-scribble-space",
      label: "My Scribble Space",
      icon: <ReadOutlined />,
    },
    {
      key: "/sleep-hygine",
      label: "Sleep hygine parameters",
      icon: <ClockCircleOutlined />,
    },
    {
      key: "/task-management",
      label: "Task and habit manager",
      icon: <CheckCircleOutlined />,
    },
    {
      key: "/techniques",
      label: "CBTi techniques",
      icon: <TrophyOutlined />,
    },
    {
      key: "/playlist",
      label: "Playlist",
      icon: <PlayCircleOutlined />,
    },

    {
      key: "/analytics-and-suggestions",
      label: "Analytics and suggestions",
      icon: <StockOutlined />,
    },
  ];

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post(`${baseUrl}/api/logout/`);
    //   console.log(response, "logout logout");

    //   axios.defaults.headers.common["Authorization"] = null;
    //   notification.success({
    //     message: "Logout Successful",
    //     description: "Thankyou, Visit again.",
    //   });
    //   document.cookie =
    //     "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    //   navigate("/login");
    // } catch (error) {
    //   console.log(error);
    //   notification.error({
    //     message: "Logout Failed",
    //     description: "Something went wrong",
    //   });
    // }

    //bypass auth floe
    navigate("/login");
  };

  return (
    <Container>
      <_Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        style={{
          backgroundColor: "#015871",
          height: "100vh",
        }}
      >
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Profile />
          <Menu
            mode="inline"
            items={items}
            selectedKeys={[selectedKey]}
            onClick={handleMenu}
            style={{ backgroundColor: "#015871", color: "white" }}
          />
        </div>

        <div
          style={{
            backgroundColor: "#015871",
            textAlign: "center",
            padding: "14px 17px",
            display: "flex",
            flexDirection: "column",
            gap: "9px",
          }}
        >
          <Button onClick={handleLogin}>
            <LogoutOutlined />
            Logout
          </Button>
          <div
            style={{
              color: "white",
              fontSize: "x-small",
              paddingTop: "4px",
            }}
          >
            <div style={{ paddingBottom: "4px" }}>
              <a href="/privacy-policy" style={{ color: "white" }}>
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/feedback" style={{ color: "white" }}>
                Feedback
              </a>{" "}
              |{" "}
              <a href="/contact-us" style={{ color: "white" }}>
                Contact Us
              </a>
            </div>
            Sleep Tech ©2023. All rights reserved.
          </div>
        </div>
      </_Sider>

      <BodyContent>
        <Content>{children}</Content>
      </BodyContent>
    </Container>
  );
}

export default AppLayout;

const Container = styled(Layout)`
  height: 100vh !important;
`;
const BodyContent = styled(Layout)`
  overflow: auto !important;
  display: flex;
  justify-content: end;
`;

const _Sider = styled(Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`;
