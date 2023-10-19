"use strict";
describe("Array", function () {
    it("should same with javascript", function () {
        const names = ["Arman", "Dwi", "Pangestu"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should support readonly array", function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
    });
});
