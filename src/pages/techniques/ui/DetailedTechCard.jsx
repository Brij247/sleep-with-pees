import { Card } from "antd";

function DetailedTechCard({ data }) {
  const { Meta } = Card;

  return (
    <Card cover={<img alt="example" src={data.logo} />} bordered={false}>
      <Meta description={data.content} />
    </Card>
  );
}

export default DetailedTechCard;
