// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["what is your github username", "what is your email", "what is your projects name", "please wright a short description of your project?",
"what kind of lices do you want?", "what command should be used to install it?", "waht command should be used to run tests?", "how to make contributions?",
"what should the user know about using the repo", "what should the user know about making contributions"];

// TODO: Create a function to write README file
function writeToFile( data) {
    const lic = `[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)`
    const read = `
${lic}
# ${data.title}

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Description
${data.descripton}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.username}
${data.email}
email me with more questions
`
    
    fs.writeFile("README.MD", read, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'username',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'email',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'title',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'discription',
      },
      {
        type: 'list',
        message: questions[4],
        name: 'license',
        choices: ["MIT", "ISC", "PDDL"]

      },
      {
        type: 'input',
        message: questions[5],
        name: 'installation',
        default: 'npm i',
      },
      {
        type: 'input',
        message: questions[6],
        name: 'tests',
        default: 'npm test',
      },
      {
        type: 'input',
        message: questions[7],
        name: 'contributing',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'usage',
      },
  ])
  .then(writeToFile);
}

// Function call to initialize app
init();