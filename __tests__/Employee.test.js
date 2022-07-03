const Employee = require('../lib/Employee');

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Ryan', 83, 'Ryan@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets employee's id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Ryan', 83, 'Ryan@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee's email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Ryan', 83, 'Ryan@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee's role from getRole()
test('creates an employee object', () => {
    const employee = new Employee('Ryan', 83, 'Ryan@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});