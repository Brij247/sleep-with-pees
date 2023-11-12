import { Col, Row } from "antd";
import styled from "styled-components";

import { Page } from "../../app/generic";
import { TechCard } from "./ui";

function Techniques() {
  document.title = "Techniques - Sleep with PeeS";

  const gutter = 32;

  return (
    <Page
      title={"CBTi Techniques"}
      content={
        <Container>
          <Row gutter={[gutter, gutter]}>
            <Col span={24}>
              <TechCard />
            </Col>
          </Row>
        </Container>
      }
    />
  );
}

export default Techniques;
const Container = styled.div`
  padding: 32px;
`;
