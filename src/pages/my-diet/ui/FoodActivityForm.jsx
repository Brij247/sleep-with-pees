import { Form, DatePicker, Input, Button } from "antd";

export const FoodActivityForm = () => {
  const [form] = Form.useForm();

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
    };
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  return (
    <Form form={form} name="foodActivity" onFinish={onFinish}>
      <Form.Item name="date-time-picker" label="Time of food">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item name="description" label="Type of food">
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
