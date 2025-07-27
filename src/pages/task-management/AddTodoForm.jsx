import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import styled from "styled-components";

function AddTodoForm({ onFormSubmit }) {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue("name"),
    });

    form.resetFields();
  };

  return (
    <Container>
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        className="todo-form"
      >
        <Row gutter={20}>
          <Col xs={24} sm={24} md={17} lg={19} xl={20}>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input placeholder="What needs to be done?" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Button type="primary" htmlType="submit" block>
              <PlusCircleFilled />
              Add todo
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default AddTodoForm;

const Container = styled.div`
  padding-top: 30px;
`;
