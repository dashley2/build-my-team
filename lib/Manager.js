const Employee = require("./Employee");
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    // call employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // override role to manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;