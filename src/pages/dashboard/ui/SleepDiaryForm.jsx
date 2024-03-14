import { useNavigate } from "react-router-dom";
import {
  Form,
  Radio,
  Input,
  Select,
  Button,
  DatePicker,
  InputNumber,
  TimePicker,
  Rate,
  Space,
} from "antd";

import { Page } from "../../../app/generic";

const { TextArea } = Input;

function SleepDiaryForm() {
  const navigate = useNavigate();

  const initialValues = {
    date: null,
    dayofWeek: "",
    bedTime: null,
    wakeupTime: null,
    sleepDuration: 0,
    sleepEnvironment: "",
    preSleepRoutine: "",
    qualityRateSleep: 0,
    DaytimeNaps: 0,
    sleepDisturbances: "",
    dreams: "",
    feelingUponWaking: "",
    difficultyFallingAsleepRate: null,
    difficultyStayingAsleepRate: null,
    problemsOnWakingUpRate: null,
    satisfySleepRate: null,
    sleepProblemsRate: null,
    sleepDistressedRate: null,
    sleepDailyFunctionalRate: null,
    napsDuration: {
      hour: null,
      minutes: null,
    },
  };

  const handleSubmit = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      date: fieldsValue["date"]?.format("YYYY-MM-DD"),
      bedTime: fieldsValue["bedTime"]?.format("HH:mm:ss"),
      wakeupTime: fieldsValue["wakeupTime"]?.format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
    navigate("/dashboard");
  };

  const onCancel = () => {
    navigate("/dashboard");
  };

  return (
    <Page
      title={"Sleep Diary"}
      content={
        <Form
          initialValues={initialValues}
          layout="horizontal"
          labelCol={{
            span: 8,
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          style={{
            padding: "30px",
          }}
          onFinish={handleSubmit}
        >
          <Form.Item name={"date"} label="Date">
            <DatePicker format={"YYYY/MM/DD"} />
          </Form.Item>
          <Form.Item label="Day of the week" name={"dayofWeek"}>
            <Select placeholder="Choose day of the week">
              <Select.Option value="Sunday"> Sunday </Select.Option>
              <Select.Option value="Monday"> Monday </Select.Option>
              <Select.Option value="Tuesday"> Tuesday </Select.Option>
              <Select.Option value="Wednesday"> Wednesday </Select.Option>
              <Select.Option value="Thursday"> Thursday </Select.Option>
              <Select.Option value="Friday"> Friday </Select.Option>
              <Select.Option value="Saturday"> Saturday </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={"bedTime"} label="Bed-time">
            <TimePicker />
          </Form.Item>
          <Form.Item name={"wakeupTime"} label="Wake-up time">
            <TimePicker />
          </Form.Item>
          <Form.Item name={"sleepDuration"} label="Total sleep duration">
            <InputNumber placeholder="Total sleep duration" min={0} />
          </Form.Item>
          <Form.Item name={"DaytimeNaps"} label="Daytime nap(s)">
            <InputNumber placeholder="Daytime nap(s)" min={0} />
            {` times`}
          </Form.Item>
          <Form.Item label="Nap(s) duration">
            <Space.Compact>
              <Form.Item noStyle name={["napsDuration", "hour"]}>
                <InputNumber placeholder="hours" min={0} />
              </Form.Item>
              <Form.Item noStyle name={["napsDuration", "minutes"]}>
                <InputNumber placeholder="minutes" min={0} />
              </Form.Item>
            </Space.Compact>
          </Form.Item>
          <Form.Item name={"sleepEnvironment"} label="Sleep environment">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name={"preSleepRoutine"} label="Pre-sleep routine">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name={"qualityRateSleep"} label="Quality of sleep">
            <Rate />
          </Form.Item>
          <Form.Item name={"sleepDisturbances"} label="Sleep disturbances">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name={"dreams"} label="Dreams or nightmares">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name={"feelingUponWaking"} label="Feeling upon waking">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name={"difficultyFallingAsleepRate"}
            label="Difficulty falling asleep"
          >
            <Radio.Group>
              <Radio value={0}> None </Radio>
              <Radio value={1}> Mild </Radio>
              <Radio value={2}> Moderate </Radio>
              <Radio value={3}> Severe </Radio>
              <Radio value={4}> Very severe</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"difficultyStayingAsleepRate"}
            label="Difficulty staying asleep"
          >
            <Radio.Group>
              <Radio value={0}> None </Radio>
              <Radio value={1}> Mild </Radio>
              <Radio value={2}> Moderate </Radio>
              <Radio value={3}> Severe </Radio>
              <Radio value={4}> Very severe</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"problemsOnWakingUpRate"}
            label="Problems waking up too yearly"
          >
            <Radio.Group>
              <Radio value={0}> None </Radio>
              <Radio value={1}> Mild </Radio>
              <Radio value={2}> Moderate </Radio>
              <Radio value={3}> Severe </Radio>
              <Radio value={4}> Very severe</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"satisfySleepRate"}
            label="How satisfied are you with 
the current sleep pattern"
          >
            <Radio.Group>
              <Radio value={0}> Very Satisfied </Radio>
              <Radio value={1}> Satisfied </Radio>
              <Radio value={2}> Moderately Satisfied </Radio>
              <Radio value={3}> Moderate </Radio>
              <Radio value={4}> Dissatisfied </Radio>
              <Radio value={5}> Very Dissatisfied </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"sleepProblemsRate"}
            label="How noticeable to others do your sleep problems is
in terms of impairing the quality of your sleep"
          >
            <Radio.Group>
              <Radio value={0}> Not at all </Radio>
              <Radio value={1}> A little </Radio>
              <Radio value={2}> Somewhat </Radio>
              <Radio value={3}> Much</Radio>
              <Radio value={4}> Very much noticeable </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"sleepDistressedRate"}
            label="How worried or distressed are 
you about your current sleep 
problem"
          >
            <Radio.Group>
              <Radio value={0}> Not at all </Radio>
              <Radio value={1}> A little </Radio>
              <Radio value={2}> Somewhat </Radio>
              <Radio value={3}> Much </Radio>
              <Radio value={4}> Very much worried </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"sleepDailyFunctionalRate"}
            label="To what extend do you consider
 your sleep problems to interfere 
with your daily functioning currently?"
          >
            <Radio.Group>
              <Radio value={0}> Not at all </Radio>
              <Radio value={1}> A little </Radio>
              <Radio value={2}> Somewhat </Radio>
              <Radio value={3}> Much </Radio>
              <Radio value={4}> Very much interesting </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save and Submit
              </Button>

              <Button htmlType="button" onClick={onCancel}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      }
    />
  );
}

export default SleepDiaryForm;
