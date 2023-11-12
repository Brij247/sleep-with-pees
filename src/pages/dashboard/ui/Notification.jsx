import { Card, Carousel, Col, Modal, Row, Space } from "antd";
import styled from "styled-components";
import {
  BellTwoTone,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Meta } = Card;

function Notification() {
  const [notifyMe, setNotifyMe] = useState(false);
  const notifData = [
    {
      key: 0,
      data: "a configured object that runs in a data location and listens to a particular trigger a configured object that runs in a data location and listens to a particular trigger",
    },
    {
      key: 1,
      data: "a configured object that runs in a data location and listens to a particular trigger",
    },
    {
      key: 2,
      data: "a configured object that runs in a data location and listens to a particular trigger",
    },
    {
      key: 3,
      data: "a configured object that runs in a data location and listens to a particular trigger",
    },
  ];
  const nofifyMe = () => {
    setNotifyMe(true);
  };

  const hideModal = () => {
    setNotifyMe(false);
  };
  return (
    <StyledCarousel
      slidesToShow={3}
      arrows
      prevArrow={<LeftCircleOutlined />}
      nextArrow={<RightCircleOutlined />}
      infinite={false}
    >
      {notifData?.map((items, index) => {
        return (
          <Row gutter={24} key={index}>
            <Col span={23} key={index}>
              <Card
                key={index}
                hoverable
                onClick={(items) => nofifyMe(items.data)}
                style={{
                  border: "2px solid #015871",
                }}
              >
                <Meta
                  style={{
                    height: "7vh",
                  }}
                  avatar={<BellTwoTone twoToneColor="#eb2f96" />}
                  description={items.data}
                />
              </Card>
            </Col>
            <Modal open={notifyMe} onOk={hideModal} onCancel={hideModal}>
              {items.data}
            </Modal>
          </Row>
        );
      })}
    </StyledCarousel>
  );
}

export default Notification;

const StyledCarousel = styled(Carousel)`
  &:hover,
  &:focus {
    cursor: grab;
  }
  .slick-slide {
    /* margin: 7px; */
  }
  .slick-list {
    /* background: #015871; */
    height: 15vh;
  }
  > .slick-dots li button {
    display: none;
  }

  > .slick-dots li.slick-active button {
    background: #015871;
  }

  > .slick-prev,
  > .slick-prev:focus {
    font-size: 1.5em;
    z-index: 2;
    color: #aaa;
  }

  > .slick-next,
  > .slick-next:focus {
    font-size: 1.5em;
    z-index: 2;
    color: #aaa;
  }

  > .slick-prev:hover,
  > .slick-next:hover {
    color: #015871;
  }
`;
