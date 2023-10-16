import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello arman", function (): void {
    expect(sayHello("arman")).toBe("Hello arman");
  });
});
