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
      width,
      height
    }}
  >
    {chunks.map((ch, i) => <Chunk key={i} {...ch} />)}
  </div>
);

export default Strip;
