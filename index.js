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
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide installation instructions.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usageInst',
        message: 'Please provide usage instructions. (Optional)',
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
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please describe how other developers can contribute to your project.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please add any testing. (Optional)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please add any testing.');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license. (Required)',
        choices: ['Apache_2.0', 'Eclipse Public License 1.0', 'Mozilla Public License 2.0', 'MIT License'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'questions',
        message: 'Please list any questions here. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('should include github username and email address.');
                return false;
            }
        }
    },

];

//test this out
const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

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
    return `# ${projectData.projectTitle}

## Table of Contents : 
${projectData.tableOfContents}

## Project Description : 
${projectData.projectDescrip}

## Installation Instructions : 
${projectData.installInst}

## Usage Instructions : 
${projectData.usageInst}

## Contribution Guidelines : 
${projectData.contrGuidelines}

## Tests : 
${projectData.tests}

## License Details : 
${projectData.license}

## Badge Details : 
${projectData.badge}
[![License](https://img.shields.io/badge/License-${projectData.license}-blue.svg)](https://opensource.org/licenses/${projectData.license})

## Project Questions : 
${projectData.questions}`;

}

// Function call to initialize app
init();
