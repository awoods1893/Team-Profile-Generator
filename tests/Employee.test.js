//import employee.js for the test and require jest for running the test
const { expect } = require("@jest/globals");
const {test} = require("@jest/globals")
const Employee = require("../lib/employee");

//testing creating a new employee
test ("Create new employee", () => {
    const employeeExample = new Employee;
    expect(typeof(employeeExample)).toBe("object");
})

//testing for input of the employee's name
test("Tests for the name", () => {
    const name = "Aaron";
    const employeeExample = new Employee(name);
    expect(employeeExample.name).toBe(name);
})

//testing the input of the employee's id
test("ID Test", () => {
    const id = 4;
    const employeeExample = new Employee("Aaron", id);
    expect(employeeExample.id).toBe(id);
}) 

//testing for the input of the employee's email address
test("Email Test", () => {
    const email = "someemail@gmail.com";
    const employeeExample = new Employee("Aaron", 4, email);
    expect(employeeExample.email).toBe(email);
})

//does getRole() in employee.js return "Employee"
test("does getRole() return Employee", () => {
    const employeeExample = new Employee("Employee");
    expect(employeeExample.getRole()).toBe("Employee");
})