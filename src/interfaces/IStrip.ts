import { IChunk } from "./IChunk";
import { IRect } from "./IRect";

export interface IStrip extends IRect {
  chunks: IChunk[];
}
