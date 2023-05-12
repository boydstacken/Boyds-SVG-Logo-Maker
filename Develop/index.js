//Packages for application
const inquirer = require ('inquirer')
const fs = require ('fs')
const SVGO = require ('svgo')
const SVGtoFont = require ('svgtofont')


//Creates an array of questions for user

inquirer
  .prompt
    {
      type: 'input',
      message: 'What is your first and last name?',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'text color',
    },
    {
      type: 'choice',
      message: 'Please choose your shape',
      choices: ['circle', 'triangle', 'shape'],
      name: 'shape',
    },
   
   
  .then((response) =>{
  const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
  // TODO: Create a function to write README file
  console.log(response)
  fs.writeFile("README.md",generateMarkdown(response), err=> {
      err?console.log(err):console.log("success")
  })
  })