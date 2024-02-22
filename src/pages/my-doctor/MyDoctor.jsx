import styled from "styled-components";
import { Col, Row } from "antd";

import { Page } from "../../app/generic";
import { MyDoctorProfile } from "./ui";

function MyDoctor() {
  document.title = "My Doctor - Sleep with PeeS";
  const gutter = 32;

  return (
    <Page
      title={"My doctor"}
      content={
        <Container>
          <Row gutter={[gutter, gutter]}>
            <Col span={24}>
              <Row gutter={[gutter, gutter]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <MyDoctorProfile />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      }
    />
  );
}

export default MyDoctor;

const Container = styled.div`
  padding: 32px;
`;
