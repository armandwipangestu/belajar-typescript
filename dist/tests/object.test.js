"use strict";
describe("Object", function () {
    it("should support in typescript", function () {
        const person = {
            id: "1",
            name: "Arman",
        };
        console.info(person);
        person.id = "2";
        person.name = "Dwi Pangestu";
        console.info(person);
    });
});
