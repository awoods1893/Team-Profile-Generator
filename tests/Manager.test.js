const {expect} = require("@jest/globals");
const {test} = require("@jest/globals");
const Manager = require("../lib/manager");

test("create manager object", () => {
    const manager = new Manager("Manager");
    expect(typeof(manager)).toBe("object");
})

test("office number", () =>{
    const manager = new Manager("Aaron", "2", "somemail@gmail.com", "103");
    expect(manager.getOfficeNumber()).toBe("103");
})

test("getRole() returns manager", () => {
    const manager = new Manager("Manager");
    expect(manager.getRole()).toBe("Manager");
})
