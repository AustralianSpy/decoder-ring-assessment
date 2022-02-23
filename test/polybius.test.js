const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius', () => {
    describe('input error-handling', () => {
        it('should return false if no input is given', () => {
            const actual = polybius('');
            expect(actual).to.be.false;
        });
        it('should return false if the input contains no letters when set to encode', () => {
            const actual = polybius('11!:56', true);
            expect(actual).to.be.false;
        });
        it('should return false if the input contains no numbers when set to decode', () => {
            const actual = polybius('abc!:defg', false);
            expect(actual).to.be.false;
        });
        it('should return false if the length of all numbers inputted is odd when set to decode', () => {
            const actual = polybius('24253132  4133444452', false);
            expect(actual).to.be.false;
        })
    });
    describe('outputs a ciphered string according to the input', () => {
        it('should treat capital letters as lowercase', () => {
            const actual = polybius('ABCDHello');
            const expected = '242531324133444452';
            expect(actual).to.equal(expected);
        });
        it('should ignore all nonalphabetic characters', () => {
            const actual = polybius('abcd hello');
            const expected = '24253132  4133444452';
            expect(actual).to.equal(expected);
        });
    });
    describe('it should encode and decode according to the boolean value', () => {
        it('should return a string of numbers, spaces, and symbols when encode is set to false', () => {
            const actual = polybius('aBcD Hello');
            const expected = '24253132  4133444452'
            expect(actual).to.not.match(/[a-zA-Z]/);
            expect(actual).to.equal(expected);
        });
        it('should return a string of letters, spaces, and symbols when encode is set to true', () => {
            const actual = polybius('24253132  4133444452');
            const expected = 'abcd hello';
            expect(actual).to.not.match(/[0-9]/);
            expect(actual).to.equal(expected);
        });
    });
});