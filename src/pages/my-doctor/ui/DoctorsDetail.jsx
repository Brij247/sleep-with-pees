import { Button, Card, Divider, Image, Space, Typography } from "antd";
import styled from "styled-components";
import { PhoneOutlined, WechatOutlined } from "@ant-design/icons";

import bgImage from "./dbg.jpg";

function DoctorsDetail() {
  return (
    <div>
      <Image height={250} width={"100%"} src={bgImage} />

      <ProfileHeader>
        <ProfileInfo>
          <Typography.Title level={3}>Dr. Will Hobbiton</Typography.Title>
          <Typography.Paragraph>
            Primary Care, Intentional Medicine
          </Typography.Paragraph>
        </ProfileInfo>
      </ProfileHeader>

      <ProfileActions>
        <Button icon={<WechatOutlined />} type="primary">
          Chat
        </Button>
        <Button icon={<PhoneOutlined />} type="primary">
          Call
        </Button>
      </ProfileActions>

      <Divider
        style={{
          marginBottom: "0",
        }}
      />

      <ProfileDetails>
        <Card>
          <Typography.Title level={4}>Details</Typography.Title>
          <Typography.Paragraph>
            Dr. Will Hobbiton is a board-certified internal medicine specialist
            with over 15 years of experience treating patients in both hospital
            and private practice settings. She is passionate about preventive
            care and dedicated to providing her patients with the highest level
            of personalized medical attention, while staying updated on the
            latest advancements in her field.
          </Typography.Paragraph>
        </Card>
      </ProfileDetails>

      <ProfileBtns>
        <Button type="primary" size="large">
          Book Appointment
        </Button>
        <Space />
      </ProfileBtns>
    </div>
  );
}

export default DoctorsDetail;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  margin-left: 20px;
`;

const ProfileActions = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-around;
`;

const ProfileDetails = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
