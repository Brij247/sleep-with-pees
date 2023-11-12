import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  BookOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  FileSearchOutlined,
  LogoutOutlined,
  MedicineBoxOutlined,
  PlayCircleOutlined,
  TrophyOutlined,
  UserOutlined,
  ReadOutlined,
  HomeOutlined,
  StockOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, notification } from "antd";

import Profile from "./Profile";
import { axios } from "../../services";

const { Sider, Footer, Content } = Layout;

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
      key: "/my-doctor",
      label: "My doctor",
      icon: <MedicineBoxOutlined />,
    },
    {
      key: "/psycho-education",
      label: "Psycho-education",
      icon: <FileSearchOutlined />,
    },
    {
      key: "/analytics-and-suggestions",
      label: "Analytics and suggestions",
      icon: <StockOutlined />,
    },
    {
      key: "/my-reports",
      label: "My reports",
      icon: <AuditOutlined />,
    },
  ];

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/logout/");
      console.log(response, "logout logout");

      axios.defaults.headers.common["Authorization"] = null;
      notification.success({
        message: "Logout Successful",
        description: "Thankyou, Visit again.",
      });
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      navigate("/login");
    } catch (error) {
      notification.error({
        message: "Logout Failed",
        description: "Something went wrong",
      });
      navigate("/login");
    }
  };
  return (
    <Container>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        style={{
          backgroundColor: "#015871",
          height: "100vh",
        }}
      >
        <div
          style={{
            overflow: "auto",
            height: "100vh",
          }}
        >
          <Profile />
          <Menu
            mode="inline"
            items={items}
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            onClick={handleMenu}
          />
          <Footer
            style={{
              backgroundColor: "#015871",
              textAlign: "center",
              padding: "14px 7px",
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
                padding: "4px 0 0 0",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "x-small",
                  padding: "0 0 4px 0",
                }}
              >
                <a href="/privacy-policy" style={{ color: "white" }}>
                  Privacy Policy
                </a>
                {` | `}
                <a href="/feedback" style={{ color: "white" }}>
                  Feedback
                </a>
                {` | `}
                <a href="/contact-us" style={{ color: "white" }}>
                  Contact Us
                </a>
              </div>
              Sleep Tech ©2023. All rights reserved.
            </div>
          </Footer>
        </div>
      </Sider>
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
