import { Card, Col, Row, Image } from "antd";

function DetailedTechCard({ data }) {
  const { Meta } = Card;

  return (
    <Card bordered={false}>
      {/* <Card cover={<img alt="example" src={data.logo} />} bordered={false}> */}
      {/* <Row> */}

      {/* </Row> */}
      {/* <Meta description={data.content} /> */}
      <Row align="middle" gutter={[24, 0]}>
        <Col span={12} xs={24} sm={24} md={12}>
          <Image src={data.logo} />
        </Col>
        <Col span={12} xs={24} sm={24} md={12}>
          {data.content}
        </Col>
      </Row>
    </Card>
  );
}

export default DetailedTechCard;
