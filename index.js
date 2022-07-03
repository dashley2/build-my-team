const generatePage = require('./src/page-template');

const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

// team array
const teamArray = [];

// add manager - user prompts
const addManager = [
    {
        type: 'input',
        name: 'name',
        message: "Who is the manager of this team?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("Please enter the team manager's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the team manager's id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the team manager's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Please enter the team manager's office number.");
                return false;
            }
        }
    }
]

// add engineer user prompts
const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the engineer's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the engineer's id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the engineer's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the engineer's github username.");
                return false;
            }
        }
    }
]
// add intern - user prompts
const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the intern's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the intern's id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the intern's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the intern's school.");
                return false;
            }
        }
    }
]
// type
const employeeType = [
    {
        type: 'list',
        name: 'type',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I do not want to add anymore team members']
    }
]

const promptEngineer = () => {
    inquirer.prompt(addEngineer)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);

            promptType();
        })
};

const promptIntern = () => {
    inquirer.prompt(addIntern)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);

            promptType();
        })

};

const promptType = () => {
    inquirer.prompt(employeeType)
        .then(answer => {
            if(answer.type === 'Engineer') {
                promptEngineer();
            } else if(answer.type === 'Intern') {
                promptIntern();
            } else {
                writeFile(generatePage(teamArray));
            }
        })
}
const promptUser = () => {
    inquirer
        .prompt(addManager)
            .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamArray.push(manager);

                promptType();
            })
};

const writeFile = html => {
    fs.writeFile('./dist/team.html', html, (err) => {
        if (err) throw new Error(err);

        console.log('Your team profile has been created! Check out team.html in the dist/ folder!');
    });
};

promptUser();
