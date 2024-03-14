import { Col, Row } from "antd";
import styled from "styled-components";

import { Page } from "../../app/generic";
import {
  AppBar,
  CalendarWidget,
  NoiseChart,
  Notification,
  TemperatureChart,
} from "./ui";

function Dashboard() {
  document.title = "Sleep Diary - Sleep with PeeS";
  const gutter = 32;

  return (
    <Page
      title={"Dashboard"}
      content={
        <Container>
          <Row gutter={[gutter, gutter]}>
            <Col span={24}>
              <Row gutter={[gutter, gutter]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Notification />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <AppBar />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <CalendarWidget />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                  <NoiseChart />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                  <TemperatureChart />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      }
    />
  );
}

export default Dashboard;

const Container = styled.div`
  padding: 32px;
`;
