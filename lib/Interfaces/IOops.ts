import {IStack} from "./IStack";
import {ISolution} from "./ISolution";
// @ts-ignore
export interface IOops extends Error {
  stack: IStack,
  statusCode: number,
  solution: ISolution
}
