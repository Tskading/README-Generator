// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${chooseLicense(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Description](#description)

  - [Installation](#installation)

  - [Usage](#usage)

  - [License](#license)

  - [Contributing](#contributing)

  - [Tests](#tests)

  - [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  - [${data.license}](https://opensource.org/licenses/${data.license})

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  [My Github](https://github.com/${data.github})

  [Email Me!](mailto:${data.email})
`;
};

function chooseLicense(license) {

  if(license === 'MIT') {
    return `[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)`
    
  } else if (license === 'GPL 3.0')
      {
        return `[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)`
      } 
        else (license === 'Apache 2.0')    
    
      {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `
      }
    
};


module.exports = generateMarkdown;
