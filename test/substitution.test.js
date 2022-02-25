const { expect } = require('chai');
const { substitution, checkDuplicates } = require('../src/substitution');

describe('substitution', () => {
    describe('checkDuplicates helper function', () => {
        it('should return false if an inputted alphabet does not contain duplicates', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = checkDuplicates(alph);
            expect(actual).to.be.false;
        });
        it('should return true if an inputted alphabet does contain duplicates', () => {
            const alph = 'gjcfnkajjuoqymmietrpzsshbd';
            const actual = checkDuplicates(alph);
            expect(actual).to.be.true;
        });
    });
    describe('alphabet + input error-handling', () => {
        it('should return false if no input is given', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('', alph);
            expect(actual).to.be.false;
        });
        it('should return false if no alphabet is given', () => {
            const alph = '';
            const actual = substitution('abcdhello', alph);
            expect(actual).to.be.false;
        });
        it('should return false if the alphabet is not exactly 26 characters', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbdg';
            const actual = substitution('abcdhello', alph);
            expect(actual).to.be.false;
        });
        it('should return false if the alphlabet contains duplicate letters', () => {
            const alph = 'gxcffkajvuoqywmmetrpzlssbd'
            const actual = substitution('abcdhello', alph);
            expect(actual).to.be.false;
        });
    });
    describe('when encoding, returns a string according to the input', () => {
        it('should encode the given message by substituting same-index characters from the given alphabet', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('abcdhello', alph);
            const expected = 'gxcfjnqqm';
            expect(actual).to.equal(expected);
        });
        it('should treat capital letters as lowercase', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('ABCDHello', alph);
            const expected = 'gxcfjnqqm';
            expect(actual).to.equal(expected);
        });
        it('should preserve all nonalphabetic characters', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('abcd hello', alph);
            const expected = 'gxcf jnqqm';
            expect(actual).to.equal(expected);
        });
    });
    describe('when decoding, returns a string according to the input', () => {
        it('should decode the given message by substituting same-index characters from the given alphabet', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('gxcfjnqqm', alph, false);
            const expected = 'abcdhello';
            expect(actual).to.equal(expected);
        });
        it('should treat capital letters as lowercase', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('ABCDHello', alph, false);
            const expected = 'gxcfjnqqm';
            expect(actual).to.equal(expected);
        });
        it('should preserve all nonalphabetic characters', () => {
            const alph = 'gxcfnkajvuoqywmietrpzlshbd';
            const actual = substitution('gxcf jnqqm', alph, false);
            const expected = 'abcd hello';
            expect(actual).to.equal(expected);
        });
    });
});