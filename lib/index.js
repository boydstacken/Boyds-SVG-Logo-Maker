//Packages for application
const inquirer = require ('inquirer')
const fs = require ('fs')
const SVGO = require ('svgo')
const SVGtoFont = require ('svgtofont')
const { Circle, Triangle, Square } = require("./shapes")


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
    let shapeType;
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

    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="${response.shapeColor}"/>${shape.setColor()}</svg>`;

    return svgData;
  })
}
run().then((svgData)=>{
  //Function created to create a SVG file
  fs.writeFile('logo.svg', svgData, (err) => {
      err?console.log(err):console.log("Generated logo.svg")
    })
  })
