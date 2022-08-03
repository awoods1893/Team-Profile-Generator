const { expect } = require("@jest/globals");
const { test } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test("does an engineer object get created", () => {
    const engineer = new Engineer("engineer1");
    expect(typeof(engineer)).toBe('object');
})

test("create a github account", () => {
    const engineer = new Engineer("Aaron", "1", "someemail@gmail.com", "awoods1893");
    expect(engineer.github).toBe("awoods1893");
})

test("getRole() returns engineer", () => {
    const engineer = new Engineer ('Manager');
    expect(engineer.getRole()).toBe("Engineer");
})