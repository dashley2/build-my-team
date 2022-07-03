const Employee = require("./Employee");
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // call employee constructor
        super (name, id, email);

        this.school = school;
    }

    // returning school from input
    getSchool () {
        return this.school;
    }

    // override role to intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;