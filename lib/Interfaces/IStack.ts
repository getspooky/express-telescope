export interface IStack {
  file: string|null|undefined,
  methodName: string,
  arguments: [],
  lineNumber: number,
  column: number,
  frames: number,
  content?: string
}
