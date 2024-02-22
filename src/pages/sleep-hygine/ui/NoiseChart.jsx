import { useState } from "react";
import { Line } from "@ant-design/plots/es";
import { Card, Radio } from "antd";

function NoiseChart() {
  const [size, setSize] = useState("yearly");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const data = [
    { x: "2023-10-01", y: 20 },
    { x: "2023-10-02", y: 22 },
    { x: "2023-10-03", y: 0 },
  ];

  const config = {
    data,
    xField: "x",
    yField: "y",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}°C`,
      },
    },
    meta: {
      y: {
        alias: "Noise (°C)",
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
    <Card title={"Noice Analysis"} extra={<SelectTab />}>
      <Line {...config} />
    </Card>
  );
}

export default NoiseChart;
