import { Line } from "@ant-design/plots/es";
import { Card } from "antd";
import styled from "styled-components";

function NoiseChart() {
  const data = [
    { x: "2023-10-01", y: 20 },
    { x: "2023-10-02", y: 22 },
    { x: "2023-10-03", y: 0 },
    // Add more data points as needed
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
  return (
    <NoiseChartCard title={"Recent Noice Analysis"}>
      <Line {...config} />
    </NoiseChartCard>
  );
}

export default NoiseChart;

const NoiseChartCard = styled(Card)`
  box-shadow: 0 3px 8px rgba(44, 130, 143, 0.2);
`;
