import * as ts from "typescript";

export class PathStep {
  public root: boolean
  public axis: string
  public name: string
  public kind: ts.SyntaxKind
  public pred: string // predicate

  /**
   * match
   */
  public match(node: ts.Node): boolean {
    return true;
  }
}
