import BSTNode from "../src/bst-node";

describe("bstNode", () => {
  test("should correctly create a node", () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
  });
});
