// constructor shape is imported
const {Shape, Circle, Square, Triange} = require(‘./shapes.js’);

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
  

