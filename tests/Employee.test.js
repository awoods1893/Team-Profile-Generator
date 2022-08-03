const Employee = require("../lib/employee");

test ("Create new employee", () => {
    const employeeExample = new Employee;
    expect(typeof(employeeExample)).toBe("object");
})

test("Tests for the name", () => {
    const name = "Aaron";
    const employeeExample = new Employee(name);
    expect(employeeExample.getName).toBe(name);
})

test("ID Test", () => {
    const id = 4;
    const employeeExample = new Employee("Aaron", id);
    expect(employeeExample.getId).toBe(id);
}) 

test("Email Test", () => {
    const email = "someemail@gmail.com";
    const employeeExample = new Employee("Aaron", 4, email);
    expect(employeeExample.getEmail).toBe(email);
})

test("does getRole() return Employee", () => {
    const employeeExample = new Employee("Employee");
    expect(employeeExample.getRole()).toBe("Employee");
})