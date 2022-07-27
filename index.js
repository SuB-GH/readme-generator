// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/README.md');
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('What is the title of your project!');
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
                console.log('Please provide a brief description of your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of Contents (Optional)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Table of Contents');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installInst',
        message: 'Please provide installation instructions. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide installation instructions.!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usageInst',
        message: 'Please provide usage instructions. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide usage instructions.!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please add any collaborators, attributions, or tutorials. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please add any collaborators, attributions, or tutorials!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'license',
        message: 'Please add any license details. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please add any license details!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'badge',
        message: 'Please add any badge details. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please add any badge details!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'features',
        message: 'Please list any features here. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please list any features here!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contrGuidelines',
        message: 'Please describe how other developers can contribute. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please describe how other developers can contribute');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projectAuthor',
        message: 'Please provide author details. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide author details!');
                return false;
            }
        }
    },
];

//test this out
const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create an array of questions for user input
// What is the title of your project?
// Please provide a description of your project.
// What was your motivation for creating the project?
// What problem does it solve?
// What did you learn?
// What steps are required to install your project?
// Provide instructions on how to use the project.
// List collaborators, if any.
// Any thirt-party assets requiring attribution?
// License details?
// Add badges



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(projectData => {
            //const pageMD = "test page";
            console.log(projectData);
            const pageMD = generateMarkdown(projectData);  //----- uncomment this after creating line 75 template literal string

            fs.writeFile('./output/exampleREADME.md', pageMD, err => {
                if (err) throw new Error(err);

                console.log('Page created! Check out exampleREADME.md in this directory to see it!');
            });
        });
}

const generateMarkdown = (projectData) => {
    //console.log("generate markdown");
    return `Project Title : ${projectData.projectTitle}
    Project Description : ${projectData.projectDescrip}

    Table of Contents : ${projectData.tableOfContents}

Installation Instructions : ${projectData.installInst}

Usage Instructions : ${projectData.usageInst}

Credits : ${projectData.credits}

License Details : ${projectData.license}

Badge Details : ${projectData.badge}

Project Features : ${projectData.features}

Contribution Guidelines : ${projectData.contrGuidelines}

Project Author : ${projectData.projectAuthor}`;

}

// Function call to initialize app
init();

// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

// const printProjectData = (projectDataArr) => {
//     console.log(projectDataArr);
// };

// printProjectData(projectDataArgs);

