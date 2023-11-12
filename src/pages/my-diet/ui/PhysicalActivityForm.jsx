import { Form, DatePicker, Input, Button } from "antd";
const { RangePicker } = DatePicker;

export const PhysicalActivityForm = () => {
  const [form] = Form.useForm();

  const onFinish = (fieldsValue) => {
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  return (
    <Form form={form} name="physicalActivity" onFinish={onFinish}>
      <Form.Item name="range-time-picker" label="Time of physical activity">
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item name="description" label="Type of physical activity">
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
