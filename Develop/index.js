//needed packages
const inquirer = require('inquirer');
const fs = require('fs');
const templateDocument = require('./renderDocument');

//Array of questions for the user
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this project?',
    },
    {
      type: 'list',
      message: 'What license does this project use?',
      name: 'license',
      choices: ['MIT' , 'Apache 2.0', 'BSD 2', 'CC Zero'],
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be used to install dependencies',
      default(){
        return 'npm i'
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this project used?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What should the user know before contributing to the project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'what command should be used for testing?',
      default() {
        return 'npm test';
    }
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Where do you want to be contacted?',
    },
    {
      type: 'input',
      name: 'gitUser',
      message: 'what is your github user name?',
    },
  ];

inquirer
    .prompt(
      questions
    )
    .then((answers) => {
        fs.writeFile('README.md', templateDocument.template(answers), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    })

