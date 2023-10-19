describe("Union Type", function () {
  it("should support in typescript", function () {
    let sample: number | string | boolean = "Arman";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Arman")).toBe("ARMAN");
    expect(process(98)).toBe(100);
    expect(process(true)).toBe(false);
  });
});
