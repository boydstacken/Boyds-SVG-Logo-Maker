// constructor shape is imported
const Shape = require('./shapes.js'); 

// A testing suite for Arithmetic is created.
describe('shape', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('circle', () => {
      it('should be a circular shape with its own color and text', () => {
        const total = 4;
        const arithmetic = new Arithmetic();
        expect(arithmetic.sum(2, 2)).toEqual(total);
      });
    });
  });
  

