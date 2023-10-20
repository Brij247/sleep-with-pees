import React, { useEffect, useState } from "react";
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
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

import Profile from "./Profile";

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
    { key: "/dashboard", label: "Sleep diary", icon: <BookOutlined /> },
    {
      key: "/my-diet",
      label: "My diet and physical activity",
      icon: <UserOutlined />,
    },
    {
      key: "/sleep-hygine",
      label: "Sleep hygine parameters",
      icon: <ClockCircleOutlined />,
    },
    {
      key: "/task-management",
      label: "Task management",
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
  ];

  return (
    <Container>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        style={{
          backgroundColor: "#015871",
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
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Button style={{}} onClick={() => navigate("/login")}>
            <LogoutOutlined />
            Logout
          </Button>
        </div>
      </Sider>
      <Layout>
        <Content>{children}</Content>
        <_Footer>Copyright @2023. Sleep Tech. All rights reserved.</_Footer>
      </Layout>
    </Container>
  );
}

export default AppLayout;

const Container = styled(Layout)`
  height: 100vh !important;
`;

const _Footer = styled(Footer)`
  text-align: center;
  float: bottom;
`;
