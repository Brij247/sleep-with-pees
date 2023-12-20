import { Card } from "antd";
import { Line } from "@ant-design/plots";
import styled from "styled-components";

const TemperatureChart = () => {
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
  return (
    <TemperatureChartCard title={"Recent temperature analysis"}>
      <Line {...config} />
    </TemperatureChartCard>
  );
};

export default TemperatureChart;

const TemperatureChartCard = styled(Card)`
  box-shadow: 0 3px 8px rgba(44, 130, 143, 0.2);
`;
