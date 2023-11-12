import { Card, Result } from "antd";
import React from "react";

function Playlist() {
  document.title = "Playlist - Sleep with PeeS";
  return (
    <Card title={"Playlist"}>
      <Result
        status="403"
        title="Under construction"
        subTitle="Sorry, page under construction!"
      />
    </Card>
  );
}

export default Playlist;
