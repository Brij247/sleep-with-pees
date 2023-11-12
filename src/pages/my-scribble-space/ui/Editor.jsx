import { useState } from "react";
import ReactQuill from "react-quill";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState("");

  return (
    <>
      <div
        style={{
          height: "75vh",
          width: "100%",
        }}
      >
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </>
  );
}

export default Editor;
