import React from "react";
import { UserOutlined } from "@ant-design/icons";

import { useStateValue } from "../config/StateProvider";
import "./Header.css";
function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__right">
        <UserOutlined alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
