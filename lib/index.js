//Packages for application
const inquirer = require ('inquirer')
const fs = require ('fs')
const SVGO = require ('svgo')
const SVGtoFont = require ('svgtofont')
const { Circle, Triangle, Square } = require("./shapes")
const svgData = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><circle cx="50" cy="50" r="50" fill="red"/></svg>';

//Creates an array of questions for user
function run(){
return inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please input your text color',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please choose your shape',
      choices: ['circle', 'triangle', 'shape'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Please input your shape color',
      name: 'shapeColor',
      },
    ])

  .then((response) => {
    let shape;
    switch (shapeType){
      case "circle":
        shape = new Circle()
        break;

      case "square":
        shape = new Square()
        break;

      default:
        shape = new Triangle()
        break;
    }
    shape.setColor(response.shapeColor)
  })
}
run();
  //Function created to create a SVG file
  console.log(response)
  fs.writeFile('logo.svg', svgDATA, (err) => {
      err?console.log(err):console.log("Generated logo.svg")
    })
