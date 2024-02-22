import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "antd";
import { ExportOutlined } from "@ant-design/icons";

import bed from "../assets/bed.gif";
import Distraction from "../assets/Distraction.gif";
import Visualization from "../assets/Visualization_of_light.gif";
import negative from "../assets/negative_thoughts.gif";
import ten from "../assets/ten_things.gif";
import walk from "../assets/walk.gif";
import first from "../assets/first01.gif";
import second from "../assets/secondCroped.gif";
import thirdcroped from "../assets/thirdcroped.gif";
import fourth from "../assets/fourthCroped.gif";
import fifth from "../assets/fifthCroped.gif";
import DetailedTechCard from "./DetailedTechCard";

function TechCard() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [data, setData] = useState("");

  const { Meta } = Card;

  const items = [
    {
      key: "1",
      label: "Relaxation techniques",
      content: (
        <>
          <h3>Imagery (visualizations):</h3> Another common type of relaxation
          training is imagery, where you visualize peaceful, pleasant scenes or
          imagine yourself breathing quietly, gently falling asleep and having a
          good night's sleep.
          <h3>Progressive muscle relaxation :</h3> also called Jacobson's or
          deep muscle relaxation: This technique involves tensing groups of
          muscles all over the body one by one and then consciously relaxing
          them again. You can learn muscle relaxation by visiting a course or
          using an audio training course.
          <h3>Autogenic training (AT): </h3> Autogenic training involves
          focusing awareness on different parts of the body and consciously
          relaxing them. At an advanced level, even involuntary bodily functions
          like pulse and breathing can be influenced to achieve deep physical
          relaxation. Autogenic training is taught in courses
        </>
      ),
      logo: Visualization,
    },

    {
      key: "7",
      label: "Cognitive Restructuring",
      content:
        "Recognizing and Changing Negative Sleep Thoughts, other thoughts that are negative or depressive, and ask the scientific/ medical practitioners for facts.",
      logo: negative,
    },
    {
      key: "8",
      label: "Guided Discovery ",
      content:
        "Ask questions to understand the issue and emotion deeply and the origin of the emotion/ feeling; “Where is it coming from”, “what is it trying to teach me”, “What is it wanting me to see”, ‘I am here”, “what do I believe”, Who/what taught me this’",
      logo: first,
    },
    {
      key: "9",
      label: "Activity rescheduling and Successive Approximation",
      content: (
        <>
          Activity scheduling can help establish good habits and provide ample
          opportunity to put what you’ve learned into practice. This involves
          taking tasks that seem overwhelming and breaking them into smaller,
          more achievable steps. Each successive step builds upon the previous
          steps so you gain confidence as you go, bit by bit.
        </>
      ),
      logo: fourth,
    },
    {
      key: "10",
      label: "Journaling ",
      content: (
        <Button
          type="primary"
          onClick={() => {
            window.location.replace("/my-scribble-space");
          }}
        >
          Write down your thoughts
          <ExportOutlined />
        </Button>
      ),
      logo: thirdcroped,
    },
    {
      key: "11",
      label: "Behavioural experiments ",
      content:
        "Precisely identify the belief/thought/process the experiment will target. Collaborate with your patient to brainstorm ideas for an experiment; be as specific as you can. Write predictions about the outcome and devise a method to record the outcome. Anticipate problems and brainstorm solutions.o	Conduct the experiment. Next step- Review the experiment and draw conclusions.",
      logo: Distraction,
    },
    {
      key: "12",
      label: "Role Playing ",
      content:
        "Improve problem solving skills : Role playing can help you work through different behaviors in potentially difficult situations. Playing out possible scenarios can lessen fear and can be used for: gaining familiarity and confidence in certain situations, practicing social skills, assertiveness training, improving communication skills",
      logo: first,
    },
    {
      key: "13",
      label: "Activity outside/ involving members ",
      content:
        "Playing board games, Sing along, Share their deepest stories, hear ones day or teachings, motivational quotes",
      logo: walk,
    },
    {
      key: "14",
      label: "Joy journal and gratidude ",
      content:
        "We maintain a journal with – “what makes me happy” and “5 things I am grateful for today”",
      logo: ten,
    },
    {
      key: "15",
      label: "Grounding techniques",
      content:
        "Use any this for grounding-  Walk barefoot on grass Look at the sky and breath deeply Drink water with blessing and thanking it, and say “I relax now” Use senses-  Watch the breath go out and in from the nostril",
      logo: thirdcroped,
    },
    {
      key: "16",
      label: "Affirmations ",
      content:
        "I love all all my parts completely, I enjoy good health, I am that I am, ",
      logo: fifth,
    },
    {
      key: "17",
      label: "Forgiveness ",
      content:
        "I forgive all your wrong doings done intentionally and untentionally and let go with love and grace, I forgive myself for all the actions that hurt myself intentionally or unintentionally",
      logo: ten,
    },
    {
      key: "18",
      label: "Parts work ",
      content:
        "The execise of sitting as a middle man and letting all parts with different thoughts to be seen as different imaginary humans and playing the middle man role to find solution to the given issue.",
      logo: bed,
    },
    {
      key: "18",
      label: "Recognition",
      content:
        "By saying and repeating these lines “I recognize I feel……”, I recognize my need to feel ……”, I recognize my resistance to let go off my need to feel……”",
      logo: second,
    },
    {
      key: "19",
      label: "Breathing exercise",
      content:
        "Left nostril breathing Deep breath with holding on the breath for 4 seconds Belly slow deep breath with visualisation Breath with sound “aah” ",
      logo: fifth,
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
        width={1000}
      >
        <DetailedTechCard data={data} />
      </Modal>
    </>
  );
}

export default TechCard;
