import * as React from "react";
import { IStrip } from "../../interfaces/IStrip";
import Chunk from "../Chunk";

interface IStripProps {
  strip: IStrip;
}
const Strip: React.StatelessComponent<IStripProps> = ({
  strip: { width, height, chunks }
}) => (
  <div
    style={{
      position: "relative",
      border: "1px solid black",
      paddingTop: height / width * 100 + "%"
    }}
  >
    {chunks.map((ch, i) => (
      <Chunk
        width={ch.width * 100 / width}
        height={ch.height * 100 / height}
        x={ch.x * 100 / width}
        y={ch.y * 100 / height}
        key={i}
      />
    ))}
  </div>
);

export default Strip;
