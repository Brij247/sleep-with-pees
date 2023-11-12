import { Card, Col, Row } from "antd";
import styled from "styled-components";
import { BookOutlined, ClockCircleOutlined } from "@ant-design/icons";

const AppBar = () => {
  const handleSleepDiary = () => {
    window.location.replace("/sleep-diary");
  };
  const handleSleepHygine = () => {
    window.location.replace("/sleep-hygine");
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={12} xs={24} sm={24} md={12}>
        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handleSleepDiary}
          >
            Sleep diary
            <BookOutlined />
          </div>
        </StyledCard>
      </Col>
      <Col span={12} xs={24} sm={24} md={12}>
        <StyledCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handleSleepHygine}
          >
            Task and habit management
            <ClockCircleOutlined />
          </div>
        </StyledCard>
      </Col>
    </Row>
  );
};

export default AppBar;

const StyledCard = styled(Card)`
  font-size: 1rem;
  font-weight: 400;
  background-color: #caf4ff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(44, 130, 143, 0.2);
`;
