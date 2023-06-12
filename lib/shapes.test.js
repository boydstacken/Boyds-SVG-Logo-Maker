// constructor shape is imported
const Shape = require('./shapes.js'); 

class Shaoe {
  constructor() {
    this.color ='';
  }
  setColor(color) {
    this.color = color;
  }
}

module.exports = Shape;

class Circle extends Shape {
  render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx = "150" cy="100" r="80" fill="purple"/></svg>`;
  }
}

class Triangle extends Shape {
  render(){
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="purple"/></svg>`;
  }
}

class Square extends Shape {
  render(){
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x= "90" y="40" width="120" height="120" fill="purple"/></svg>`
  }
}

// A testing suite for Arithmetic is created.
describe(' if ld', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('circle', () => {
      it('should be a circular shape with its own color and text', () => {
        const total = 4;
        const arithmetic = new Arithmetic();
        expect(arithmetic.sum(2, 2)).toEqual(total);

        const circle = new Circle();
        circle.setColor('blue');
        const actualSVG = circle.render();

        expect(actualSVG).toEqual(expectedSVG);
      });
  });

    describe('triangle', () => {
      it('should be a triangle shape with its own color and text', () => {
        const total = 4;
        const arithmetic = new Arithmetic();
        expect(arithmetic.sum(2, 2)).toEqual(total);
  
          const triangle = new Triangle();
          triangle.setColor('blue');
          const actualSVG = triangle.render();

          expect(actualSVG).toEqual(expectedSVG);
        });
    });
    describe('square', () => {
      it('should be a square shape with its own color and text', () => {
        const total = 4;
        const arithmetic = new Arithmetic();
        expect(arithmetic.sum(2, 2)).toEqual(total);
        
        const square = new Square();
        square.setColor('blue');
        const actualSVG = square.render();

        expect(actualSVG).toEqual(expectedSVG);
        });
      });
    });
  

