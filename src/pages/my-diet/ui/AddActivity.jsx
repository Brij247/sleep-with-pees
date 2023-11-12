import { Tabs } from "antd";
import { FoodActivityForm } from "./FoodActivityForm";
import { PhysicalActivityForm } from "./PhysicalActivityForm";

export const AddActivity = () => {
  const items = [
    {
      key: "1",
      label: "Food activity",
      children: <FoodActivityForm />,
    },
    {
      key: "2",
      label: "Physical activity",
      children: <PhysicalActivityForm />,
    },
  ];
  return <Tabs defaultActiveKey="1" type="card" size={"small"} items={items} />;
};
