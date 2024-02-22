import { Card, Result } from "antd";

function MyProfile() {
  return (
    <Card title={"My profile"}>
      <Result
        status="403"
        title="Under construction"
        subTitle="Sorry, page under construction!"
      />
    </Card>
  );
}

export default MyProfile;
