import { useState } from "react";
import { Button, Card, DatePicker, Form, Input, Modal } from "antd";

import { Calender } from "./ui/Calender";

const { TextArea } = Input;

function MyDiet() {
  document.title = "My diet - Sleep with PeeS";

  const [openActivityModal, setOpenActivityModal] = useState(false);

  const onFinish = (values) => {
    setOpenActivityModal(false);
  };

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
    setOpenActivityModal(false);
  };

  return (
    <>
      <Card title={"My diet and physical activity"}>
        <Calender />
      </Card>
      <Modal
        title={"Add activity"}
        open={openActivityModal}
        footer={null}
        onCancel={onOk}
      >
        <Form name="actvity" layout="vertical" onFinish={onFinish}>
          <Form.Item name={"timeOfFood"} label="Time of food">
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </Form.Item>
          <Form.Item name={"typeOfFood"} label="Type of food">
            <TextArea />
          </Form.Item>
          <Form.Item
            name={"timeOfPhysicalActivity"}
            label="Time of physical activity"
          >
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </Form.Item>
          <Form.Item
            name={"typeOfPhysicalActivity"}
            label="Type of physical activity"
          >
            <TextArea />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default MyDiet;
