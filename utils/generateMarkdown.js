// TODO: Create a function to generate markdown for README
const generateMarkdown = (projectData) => {  
  
  //console.log("generate markdown");
  return `# ${projectData.projectTitle}
  
[![License](https://img.shields.io/badge/License-${projectData.license}-blue.svg)](https://opensource.org/licenses/${projectData.license})


## Table of Contents : 
- [Description](#project-description)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [Contributions](#contribution-guidelines)
- [Testing](#tests)
- [License Details](#license-details)
- [Questions](#project-questions)

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

## Project Questions : 
${projectData.questions}`;
}

module.exports = generateMarkdown;


//removed these:
// ## Badge Details : 
// ${projectData.badge}
// [![License](https://img.shields.io/badge/License-${projectData.license}-blue.svg)](https://opensource.org/licenses/${projectData.license})


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return; 
  //![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
