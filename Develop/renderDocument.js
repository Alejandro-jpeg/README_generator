const badges = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
];
const [mit, apache, bsd, cczero] = badges;

  function renderLicenseBadge(license){
    switch (license) {
      case 'MIT':
        return mit;
      
      case 'Apache 2.0':
        return apache;

      case 'BSD 2':
        return bsd;
      case 'CC Zero':
        return cczero;
      default:
        return '';
    }
  }

  function licenseCheck(license){
    if (license === 'No License') {
        return 'N/A';
    }else{
        return 'This proyect is licensed under the' + license + 'license'
    }
  }
  //README template
  const template = ({name, license, description, installation, usage, contribution, testing, contact, gitUser}) => 

`# ${name}

${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Contribution](#contribution-guidelines)

- [Test](#test-instructions)

- [Credits](#credits)

- [License](#license)

## Installation

To install dependencies use the following command : ${installation}

## Usage

${usage}

## Contribution Guidelines

${contribution}

## Test Instructions

To run a test, use the following command : ${testing}

## Questions

If you have any questions, please contact me at ${contact}.

Find me on github: [${gitUser}](https://github.com/${gitUser})

## License

${licenseCheck(license)}`

module.exports = {
    badges,
    template,
    renderLicenseBadge,
}