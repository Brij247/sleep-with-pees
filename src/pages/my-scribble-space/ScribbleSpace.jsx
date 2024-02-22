import { useState } from "react";
import { Card, Radio } from "antd";

import { Editor, Scribble } from "./ui";

function ScribbleSpace() {
  const [userSection, setUserSection] = useState("editor");

  const handleSizeChange = (e) => {
    setUserSection(e.target.value);
  };

  return (
    <>
      <Card
        title={"Scribble space"}
        extra={
          <>
            <Radio.Group value={userSection} onChange={handleSizeChange}>
              <Radio.Button value="editor">Text</Radio.Button>
              <Radio.Button value="scribble">Draw</Radio.Button>
            </Radio.Group>
          </>
        }
      >
        {userSection === "editor" ? <Editor /> : <Scribble />}
      </Card>
    </>
  );
}

export default ScribbleSpace;
