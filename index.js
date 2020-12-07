const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const userPrompt = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'This is where you insert your project description -->'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe your projects installation process here -->'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your projects usage information here -->'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to add to your project?',
        choices: ['MIT', 'GPL 3.0', 'Apache-2.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the best way to contribute to your project?'
    },
      {
        type: 'input',
        name: 'test',
        message: 'Input your testing instructions here -->'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Get your email onto the README by typing here -->'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github user name here -->'
    },
  
])

// function to initialize program
function init() {
    userPrompt()
        .then((data) => writeFileAsync('myREADME.md', generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to myREADME.md'))
        .catch((err) => console.error(err));
}

// function call to initialize program
init();

