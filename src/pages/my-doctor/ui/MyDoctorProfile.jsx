import { Link } from "react-router-dom";
import { Card, Col, Empty, Row } from "antd";

import bgImage from "./dbg.jpg";
import { useFetchDoctorsList } from "../api/doctorList.hook";

function MyDoctorProfile() {
  const { data: doctorList, isPending, error } = useFetchDoctorsList();
  console.log(doctorList, isPending, error, "myDoctorsList");

  return doctorList?.length > 0 ? (
    <Row gutter={[16, 16]}>
      {doctorList?.map((item, index) => (
        <Col span={8} xs={24} sm={12} md={8} lg={8} key={index}>
          <Link to={`/doctors-details/${item?.id}`}>
            <Card cover={<img alt="example" src={bgImage} />}>
              {item?.name}
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  ) : (
    <Empty />
  );
}

export default MyDoctorProfile;
