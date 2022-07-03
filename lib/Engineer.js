const Employee = require("./Employee");
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call employee constructor
        super (name, id, email);

        this.github = github;
    }

    // returning github from input
    getGithub () {
        return this.github;
    }

     // override role to engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;