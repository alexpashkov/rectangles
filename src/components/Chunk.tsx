import * as React from "react";
import { IChunk } from "../interfaces/IChunk";

const Chunk: React.StatelessComponent<IChunk> = props => {
  const { x, y, width, height } = props;
  return (
    <div
      style={{
        position: "absolute",
        border: "1px dotted black",
        fontSize: 10,
        top: y + "%",
        left: x + "%",
        width: width + "%",
        height: height + "%"
      }}
    >
      x: {x}, y: {y}, width: {width}, height: {height}
    </div>
  );
};

export default Chunk;
