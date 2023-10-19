import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support in typescript", function () {
    const category: Category = {
      id: "1",
      name: "Laptop",
    };

    const product: Product = {
      id: "1",
      name: "MacBook Pro M1",
      price: 2000000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
