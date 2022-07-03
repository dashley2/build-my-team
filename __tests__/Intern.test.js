const Intern = require('../lib/Intern');

// creates intern object
test('creates an Intern object', () => {
    const intern = new Intern('Ryan', 83, 'Ryan@gmail', 'UNC');

    expect(intern.school) .toEqual(expect.any(String));
});

// gets intern school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Ryan', 83, 'Ryan@gmail', 'UNC');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets intern role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Ryan', 83, 'Ryan@gmail.com', 'UNC');

    expect(intern.getRole()).toEqual("Intern");
});