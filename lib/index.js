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
      choices: ['circle', 'triangle', 'square'],
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
    switch (response.shape){
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
    console.log(response.shapeColor)
    shape.setColor(response.shapeColor)
    

    return shape.render()+`<text x="150" y="100" fill="${response.textColor}">Hello, World!</text></svg>` 


});

}

run().then((svgData)=>{
  //Function created to create a SVG file
  fs.writeFile('logo.svg', svgData, (err) => {
      err?console.log(err):console.log("Generated logo.svg")
})
})

