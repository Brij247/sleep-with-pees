import { Card, Col, Row, Typography } from "antd";
import styled from "styled-components";
import {
  BookOutlined,
  ClockCircleOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const AppBar = () => {
  const handleSleepDiary = () => {
    window.location.replace("/sleep-diary");
  };

  const handleSleepHygine = () => {
    window.location.replace("/sleep-hygine");
  };

  const handleScribbleSpace = () => {
    window.location.replace("/my-scribble-space");
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={8} xs={24} sm={24} md={8}>
        <StyledCard onClick={handleSleepDiary}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <Title level={3}>Sleep diary</Title>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                background: "#015871",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
            >
              <BookOutlined />
            </div>
          </div>
        </StyledCard>
      </Col>
      <Col span={8} xs={24} sm={24} md={8}>
        <StyledCard onClick={handleScribbleSpace}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <Title level={3}>Scribble space</Title>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                background: "#015871",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
            >
              <ReadOutlined />
            </div>
          </div>
        </StyledCard>
      </Col>
      <Col span={8} xs={24} sm={24} md={8}>
        <StyledCard onClick={handleSleepHygine}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <Title ellipsis level={3}>
              Task and habit management
            </Title>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "48px",
                height: "48px",
                background: "#015871",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
            >
              <ClockCircleOutlined />
            </div>
          </div>
        </StyledCard>
      </Col>
    </Row>
  );
};

export default AppBar;

const StyledCard = styled(Card)`
  font-size: 1rem;
  // font-weight: 400;
  // background-color: #caf4ff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(44, 130, 143, 0.2);
`;
