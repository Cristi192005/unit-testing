const { expect } = require('chai');
const mylib = require('../mylib');

describe('mylib arithmetic operations', function () {

    before(function () {
        console.log('Starting unit tests...');
    });

    after(function () {
        console.log('Unit tests completed.');
    });

    it('should add two numbers correctly', function () {
        expect(mylib.add(5, 3)).to.equal(8);
    });

    it('should subtract two numbers correctly', function () {
        expect(mylib.subtract(5, 3)).to.equal(2);
    });

    it('should multiply two numbers correctly', function () {
        expect(mylib.multiply(5, 3)).to.equal(15);
    });

    it('should divide two numbers correctly', function () {
        expect(mylib.divide(6, 3)).to.equal(2);
    });

    it('should throw an error when dividing by zero', function () {
        expect(() => mylib.divide(6, 0)).to.throw('Cannot divide by zero');
    });

});