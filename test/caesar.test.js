const { expect, assert } = require('chai');
const { caesar, shiftCheck } = require('../src/caesar');

describe('shiftCheck', () => {
    describe('handle errors in shift values', () => {
        it('should return false if an input number is 0', () => {
            const actual = shiftCheck(0);
            expect(actual).to.be.false;
        });
        it('should return false if an input number is greater than 25', () => {
            const actual = shiftCheck(26);
            expect(actual).to.be.false;
        });
        it('should return false if an input number is less than -25', () => {
            const actual = shiftCheck(-26);
            expect(actual).to.be.false;
        });
        it('should return true for a valid input', () => {
            const actual = shiftCheck(7);
            expect(actual).to.be.true;
        });
    });
});

describe('caesar', () => {
    describe('handling of input errors', () => {
        it ('should return false if an invalid shift-value is given', () => {
            const actual = caesar('abscdefg', 0);
            expect(actual).to.be.false;
        });
        it ('should return false if no input string is given', () => {
            const actual = caesar('', 3);
            expect(actual).to.be.false;
        });
        it ('should return false if the input string contains no letters', () => {
            const actual = caesar('11!:568', 3);
            expect(actual).to.be.false;
        });
    });
    describe('outputs a properly-shifted string according to input', () => {
        it('should return a string of equivalent length to the given input', () => {
            const str = 'abcdefg:hello.'
            const actual = caesar(str, 16);
            expect(actual).to.have.a.lengthOf(14);
        });
        it('should treat capital letters as lowercase', () => {
            const str = 'ABCDHello';
            const actual = caesar(str, 1);
            const expected = 'bcdeifmmp';
            expect(actual).to.equal(expected);
        });
        it('should ignore all nonalphabetic characters', () => {
            const str = 'a:b!c,d? hello.'
            const actual = caesar(str, 2);
            const expected = 'c:d!e,f? jgnnq.';
            expect(actual).to.equal(expected);
        });
        it('should shift characters to the left if a negative input is given', () => {
            const str = 'efghlmnop';
            const actual = caesar(str, -2);
            const expected = 'cdefjklmn';
            expect(actual).to.equal(expected);
        });
        it('should wrap around to the other end of the alphabet if the shift surpasses it', () => {
            const str = 'tuvwxyz';
            const actual = caesar(str, 3);
            const expected = 'wxyzabc';
            expect(actual).to.equal(expected);
        });
    });
    describe('it should encode and decode according to the boolean value', () => {
        it('should encode the message according to the shift-value if encode is set to true', () => {
            const str = 'abcdefg';
            const actual = caesar(str, 2, true);
            const expected = 'cdefghi';
            expect(actual).to.equal(expected);
        });
        it('should decode the message according to a reversed shift-value if encode is set to false', () => {
            const str = 'cdefghi';
            const actual = caesar(str, 2, false);
            const expected = 'abcdefg';
            expect(actual).to.equal(expected);
        });
    });
});
