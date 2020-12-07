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

  ${licenseInfo(data.license)}

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
    
  } else if (license === 'GPL-3.0')
      {
        return `[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)`
      } 
        else (license === 'Apache-2.0')    
    
      {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      }
    
};

function licenseInfo(license) {

  if (license === 'MIT') {
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === 'GPL-3.0') {
    return `GNU LESSER GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007
    
    Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
    
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
    
    This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.`
  } 
  
  else {return `Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`}
};


module.exports = generateMarkdown;
