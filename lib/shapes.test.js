// constructor shape is imported
const {Shape, Circle, Square, Triange} = require("./shapes.js");
const Arithmetic = require("./arithmetic.js")

// A testing suite for Arithmetic is created.
describe(' if ld', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('circle', () => {
      it('should be a circular shape with its own color and text', () => {

        const circle = new Circle();
        circle.setColor('blue');
        const actualSVG = `<circle cx = "150" cy="100" r="80" fill="blue"/>`

        expect(actualSVG).toEqual(expectedSVG);
      });
  });

    describe('triangle', () => {
      it('should be a triangle shape with its own color and text', () => {
       
          const triangle = new Triangle();
          triangle.setColor('blue');
          const actualSVG = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`

          expect(actualSVG).toEqual(expectedSVG);
        });
    });
    describe('square', () => {
      it('should be a square shape with its own color and text', () => {
       
        const square = new Square();
        square.setColor('blue');
        const actualSVG = `<rect x= "90" y="40" width="120" height="120" fill="blue"/>`

        expect(actualSVG).toEqual(expectedSVG);
        });
      });
    });
  

