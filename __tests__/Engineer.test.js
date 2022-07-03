const Engineer = require('../lib/Engineer');

// creates engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Ryan', 83, 'Ryan@gmail', 'RyanW25');

    expect(engineer.github) .toEqual(expect.any(String));
});

// gets engineer's github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Ryan', 83, 'Ryan@gmail', 'RyanW25');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets engineer's role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Ryan', 83, 'Ryan@gmail', 'RyanW25');

    expect(engineer.getRole()).toEqual("Engineer");
});