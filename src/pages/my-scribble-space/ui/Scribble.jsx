import { Tldraw } from "@tldraw/tldraw";
import styled from "styled-components";

function Scribble() {
  return (
    <div
      style={{
        height: "70vh",
        width: "100px",
        overflow: "hidden",
      }}
    >
      <_Tldraw />
    </div>
  );
}

export default Scribble;

const _Tldraw = styled(Tldraw)`
  .tldraw-wrapper > * {
    max-width: 10vw;
  }
`;
