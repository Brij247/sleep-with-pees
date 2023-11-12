import { Tldraw, useFileSystem } from "@tldraw/tldraw";

function Scribble() {
  return (
    <div
      style={{
        height: "70vh",
        width: "20vw",
      }}
    >
      <Tldraw />;
    </div>
  );
}

export default Scribble;
