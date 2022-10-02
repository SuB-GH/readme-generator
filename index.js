const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide a project title.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projectDescrip',
        message: 'Please provide a brief description of your project. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide a brief description of your project.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installInst',
        message: 'Please provide installation instructions. (Optional)',
      },

    {
        type: 'input',
        name: 'usageInst',
        message: 'Please provide usage instructions. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide usage instructions.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contrGuidelines',
        message: 'Please describe how other developers can contribute to your project. (Optional)',
       },

    {
        type: 'input',
        name: 'tests',
        message: 'Please add any testing. (Optional)',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license. (Optional)',
        choices: ['Eclipse Public License 1.0', 'Apache_2.0', 'Mozilla Public License 2.0', 'MIT License'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// function to initialize app
function init() {
    promptUser()
        .then(projectData => {
            //const pageMD = "test page";
            console.log(projectData);
            const pageMD = generateMarkdown(projectData);

            fs.writeFile('./output/exampleREADME.md', pageMD, err => {
                if (err) throw new Error(err);

                console.log('Page created! Check out exampleREADME.md in this directory to see it!');
            });
        });
}
// Function call to initialize app
init();
