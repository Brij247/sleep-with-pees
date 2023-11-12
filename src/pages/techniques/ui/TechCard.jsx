import { useState } from "react";
import { Card, Col, Modal, Row } from "antd";

import bed from "../assets/bed.gif";
import Distraction from "../assets/Distraction.gif";
import Visualization from "../assets/Visualization_of_light.gif";
import negative from "../assets/negative_thoughts.gif";
import ten from "../assets/ten_things.gif";
import walk from "../assets/walk.gif";
import DetailedTechCard from "./DetailedTechCard";

function TechCard() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [data, setData] = useState("");

  const { Meta } = Card;

  const items = [
    {
      key: "1",
      label: "Visualization of light",
      content:
        "Visualization of lightVisualization of lightVisualization of lightVisualization",
      logo: Visualization,
    },
    {
      key: "2",
      label: "Identify negative thoughts",
      content: "Identify negative thoughts",
      logo: negative,
    },
    {
      key: "3",
      label: "Distraction technique",
      content: "Distraction technique",
      logo: Distraction,
    },
    {
      key: "4",
      label: "Write about ten things",
      content: "Write about ten things",
      logo: ten,
    },
    {
      key: "5",
      label: "Go for a walk or ride outside",
      content: "Go for a walk or ride outside",
      logo: walk,
    },
    {
      key: "6",
      label: "Declutter - your bedroom",
      content: "Declutter - your bedroom",
      logo: bed,
    },
  ];

  const handleDetailedCard = (items) => {
    setIsDetailVisible(true);
    setData(items);
  };

  const handleOk = () => {
    setIsDetailVisible(false);
  };

  const handleCancel = () => {
    setIsDetailVisible(false);
  };

  return (
    <>
      <Row gutter={[24, 24]}>
        {items.map((items) => {
          return (
            <Col key={items.key} span={8} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={items.logo} />}
                onClick={() => handleDetailedCard(items)}
              >
                <Meta title={items.label} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Modal
        open={isDetailVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        title={data.label}
      >
        <DetailedTechCard data={data} />
      </Modal>
    </>
  );
}

export default TechCard;
