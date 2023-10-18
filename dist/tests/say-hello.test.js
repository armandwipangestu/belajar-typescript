import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("should return hello arman", function () {
        expect(sayHello("arman")).toBe("Hello arman");
    });
});
