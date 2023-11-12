import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";

import bgImage from "./dbg.jpg";

function MyDoctorProfile() {
  const data = [
    { id: 1, content: "Dr. John Doe" },
    {
      id: 2,
      content: "Dr. Ajaya",
    },
    {
      id: 3,
      content: "Dr. Suresh",
    },
    {
      id: 4,
      content: "Dr. Anoop Mukharjee",
    },
    {
      id: 5,
      content: "Dr. Naresh",
    },
    {
      id: 6,
      content: "Dr. Aditya",
    },
  ];
  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col span={8} xs={24} sm={12} md={8} lg={8} key={index}>
          <Link to={`/doctors-details/${item.id}`}>
            <Card cover={<img alt="example" src={bgImage} />}>
              {item.content}
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default MyDoctorProfile;
