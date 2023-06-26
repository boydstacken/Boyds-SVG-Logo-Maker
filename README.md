# Boyd's SVG Logo Maker

## Description

The motivation to for this application was to provide user-input utilizing command-lines by answering prompts (to craft the actual shape, color, and text) with specific input generate a logo sand save it as an SVG file.

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)

## Installation

Do a npm install in the terminal to get all the npm packages.

Ensure you have other proper packages included to run this application (inquirer, fs, jest, SVGtoFont, and SVG). All essential to create your custom application. 

Create an example folder where the user's generated SVG file ecan store and you can view how user in put is displayed. Try all 3 different shapes, colors, and inpuy your text to get the desired result.

Record the walkthrough of the user prompts in node js, jest, and store the file link in the README.

## Usage

Here's a quick video link on how to use this application: https://drive.google.com/file/d/1_-dHBcFrTgt44eECPXNEXmGxyMkS52xy/view


Install npm packages, in the index.js file include packages for application (inquirer, fs, jest, SVGtoFont, and SVG ), create am object for the shapes (circle, triangle, and square). Implment iquirer prompt with criteria for the different ques to create a .then response file and a switch method to return the shapes, colors and text with a SVG file generated from a from function using "fs". Use console log along the way to test for errors for this portion.

Develop a shapes.js file with a class Shape with constructors followed by individual classes for each shape (circle, triangle. and square).

Finally, establish a shapes.test.js file with your code and perform a "run npm test" to successfully test your code for functionality and troubleshooting to find solutions. 

After code is implemented, run the cmd "node index.js" in the terminal in your working path directory, complete the prompts and view the generated SVG file that should resemble the desired look. 

## Credits

Boyd Stacken
Github Profile: https://github.com/boydstacken

## License

n/a

## Questions

If you have any questions about this Professional README Generator, please contact boydstacken@icloud.com with any futher inquiries.

## Video Tutorial

Here is the link with the tutorial on how to use this aplicaiton: https://drive.google.com/file/d/1_-dHBcFrTgt44eECPXNEXmGxyMkS52xy/view
