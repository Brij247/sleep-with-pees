import { Card, Result } from "antd";

function MyReport() {
  return (
    <Card title={"My reports"}>
      <Result
        status="403"
        title="Under construction"
        subTitle="Sorry, page under construction!"
      />
    </Card>
  );
}

export default MyReport;
