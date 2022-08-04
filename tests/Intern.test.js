const { test } = require("@jest/globals");
const {expect} = require("@jest/globals");
const Intern = require("../lib/intern");

test("can create an intern object", () =>{
    const intern = new Intern ("Intern");
    expect(typeof(intern)).toBe("object");
})
test("getRole() returns Intern", () => {
    const intern = new Intern("Intern")
    expect(intern.getRole()).toBe("Intern");
})
test("can pull intern's school", () => {
    const intern = new Intern("Intern", "2", "email", "school");
    expect(intern.school).toBe("school");
})

