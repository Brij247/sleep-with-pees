import { Tabs, Typography } from "antd";
import styled from "styled-components";

import Login from "./Login";
import Register from "./Register";

const { Text } = Typography;

function AuthFrame() {
  document.title = "Sign in - Sleep with PeeS";
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Login",
      children: <Login />,
    },
    {
      key: "2",
      label: "Register",
      children: <Register />,
    },
  ];
  return (
    <Container>
      <Content>
        <Frame>
          <Header>
            <Logo>Sleep with PeeS</Logo>
            <br />
            <Text type="secondary">Sign in to continue</Text>
          </Header>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Frame>
      </Content>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </Container>
  );
}

export default AuthFrame;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  );
`;
const Content = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Frame = styled.div`
  background-color: #ffffff;
  padding: 32px 20px 24px;
  height: auto;
  width: 350px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 5px 8px 24px 5px rgba(288, 216, 243, 0.6);
`;
const Header = styled.div`
  text-align: center;
`;
const Logo = styled.div`
  color: #015871;
  font-weight: 700;
  font-size: 2rem;
`;
