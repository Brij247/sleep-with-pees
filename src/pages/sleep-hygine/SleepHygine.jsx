import styled from "styled-components";
import { Col, Row } from "antd";

import { Page } from "../../app/generic";
import { NoiseChart, TemperatureChart } from "./ui";

function SleepHygine() {
  document.title = "Sleep Hygine - Sleep with PeeS";
  const gutter = 32;

  return (
    <Page
      title={"Sleep hygine parameters"}
      content={
        <Container>
          <Row gutter={[gutter, gutter]}>
            <Col span={24}>
              <Row gutter={[gutter, gutter]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <TemperatureChart />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <NoiseChart />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      }
    />
  );
}

export default SleepHygine;

const Container = styled.div`
  padding: 32px;
`;
