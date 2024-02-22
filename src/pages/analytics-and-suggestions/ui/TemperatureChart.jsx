import { useState } from "react";
import { Card, Radio } from "antd";
import { Line } from "@ant-design/plots";

const TemperatureChart = () => {
  const [size, setSize] = useState("yearly");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const data = [
    { date: "2023-10-01", temperature: 20 },
    { date: "2023-10-02", temperature: 22 },
    { date: "2023-10-03", temperature: 25 },
    // Add more data points as needed
  ];

  const config = {
    data,
    xField: "date",
    yField: "temperature",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}°C`,
      },
    },
    meta: {
      temperature: {
        alias: "Temperature (°C)",
      },
    },
  };

  const SelectTab = () => {
    return (
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="weekly">Weekly</Radio.Button>
        <Radio.Button value="monthly">Monthly</Radio.Button>
        <Radio.Button value="yearly">Yearly</Radio.Button>
      </Radio.Group>
    );
  };

  return (
    <Card title={"Temperature Analysis"} extra={<SelectTab />}>
      <Line {...config} />
    </Card>
  );
};

export default TemperatureChart;
