"use strict";
describe("Any", function () {
    it("should support in typescript", function () {
        const person = {
            id: 1,
            name: "Arman Dwi Pangestu",
            age: 21,
        };
        person.age = 22;
        person.address = "Indonesia";
        console.info(person);
    });
});
