import { useState } from "react";
import { Card, Carousel, Col, Modal, Row, Typography } from "antd";
import styled from "styled-components";
import {
  BellTwoTone,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Paragraph } = Typography;

function Notification() {
  const [notifyMe, setNotifyMe] = useState(false);

  const myths = [
    {
      key: 0,
      myth: "Taking sleeping pills is the best solution for insomnia.",
      data: "While sleeping pills can be helpful in some cases, they are not a long-term solution and can have side effects. Cognitive Behavioral Therapy for Insomnia (CBT-I) is considered the most effective treatment for chronic insomnia",
    },
    {
      key: 1,
      myth: "Insomnia is just a normal part of aging.",
      data: "While sleep patterns may change with age, chronic insomnia is not a normal part of the aging process. Sleep problems in older adults can often be addressed and treated",
    },
    {
      key: 2,
      myth: "Insomnia is just difficulty falling asleep.",
      data: "Insomnia involves difficulty falling asleep, staying asleep, or experiencing non-restorative sleep. It can also include waking up too early and not being able to fall back asleep.",
    },
    {
      key: 3,
      myth: "Everyone needs eight hours of sleep per night.",
      data: "The amount of sleep needed varies from person to person. While the average adult may require around 7-9 hours, individual sleep needs can range from 6-10 hours ",
    },
    {
      key: 4,
      myth: "Insomnia is purely a psychological problem.",
      data: " Insomnia can have various causes, including psychological, medical, and environmental factors. Its essential to identify and address the underlying cause of insomnia for effective treatment. ",
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
      {myths?.map((items, index) => {
        return (
          <>
            <Row gutter={[24, 24]} key={items.key}>
              <Col span={23} xs={23} sm={23} md={23}>
                <Card
                  ellipsis
                  key={items.key}
                  hoverable
                  onClick={nofifyMe}
                  style={{
                    border: "2px solid #015871",
                  }}
                >
                  <Meta
                    style={{
                      height: "7vh",
                    }}
                    avatar={<BellTwoTone twoToneColor="#05b04c" />}
                    description={
                      <Paragraph
                        ellipsis={
                          !notifyMe
                            ? {
                                rows: 2,
                                expandable: true,
                                symbol: "more",
                              }
                            : false
                        }
                      >
                        {items.data}
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>
            </Row>

            <Modal
              title={items?.myth}
              open={notifyMe}
              onOk={hideModal}
              onCancel={hideModal}
              footer={null}
            >
              {items.data}
            </Modal>
          </>
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
  }
  .slick-list {
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
