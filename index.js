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
        message: "What is the title of your project?",
        name: 'title'
    },
    
])


// function to write README file
function writeToFile(fileName, data) {
    // use fs here
}

// function to initialize program
function init() {
    // call inquirer
// inquirer.prompt(userPrompt)

userPrompt()
  .then((data) => writeFileAsync('testreadme.md', generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to testreadme.md'))
  .catch((err) => console.error(err));
}

// function call to initialize program
init();

