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
- [Questions](#questions)

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

## Questions?
[Click here to view my github page](https://github.com/${projectData.github})
\n or contact me at:  ${projectData.email}`;
}

module.exports = generateMarkdown; //export this to the index.js file
