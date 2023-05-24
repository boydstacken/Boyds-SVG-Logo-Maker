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
    let shapeType; ['circle', 'triangle', 'square']
    switch (response.shapeType){
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

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rectangle x= "90" y="40" width="120" height="120" fill="${response.shapeColor}"/>
    <polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}"/>
    <circle cx="150" cy="100" r="50" fill="${response.shapeColor}" />
    <text x="150" y="100" fill="${response.textColor}">Hello, World!</text>
  </svg>`;

});

}

run().then((svgData)=>{
  //Function created to create a SVG file
  fs.writeFile('logo.svg', svgData, (err) => {
      err?console.log(err):console.log("Generated logo.svg")
})
})

