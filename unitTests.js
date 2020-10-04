const {describe, it} = require('mocha');
const {expect} = require('chai');

// Problem 1
const {reverse} = require('./PS1.P1');
describe('reverseTest', () => {
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa', () => {
        let s1 = 'supercalifragilisticexpialidocious';
        let expected = 'xuutsssrrppoollliiiiiiigfeedcccaaa';
        expect(expected).equal(reverse(s1));
    });
    it('should return zsspolieeaML', () => {
        let s2 = 'MelissaLopez'
        let expected = 'zsspolieeaML'
        expect(expected).equal(reverse(s2));
    });
});

// Problem 2
const {evaluate} = require('./PS1.P2');
describe('evaluateTest', () => {
    it('should return 6', () => {
        let expression = '4+2'
        let operator = evaluate(expression)();
        expect(operator).equal(6);
    });
    it('should return 35', () => {
        let expression = '5*7'
        let operator = evaluate(expression)();
        expect(operator).equal(35);
    });
    it('should return 5', () => {
        let expression = '6-1'
        let operator = evaluate(expression)();
        expect(operator).equal(5);
    });
    it('should return 4.5', () => {
        let expression = '9/2'
        let operator = evaluate(expression)();
        expect(operator).equal(4.5);
    });
    it('should return 256', () => {
        let expression = '2^8'
        let operator = evaluate(expression)();
        expect(operator).equal(256);
    });
});

// Problem 3
const {problem3} = require('./PS1.P3');
describe('problem3Test', () => {
    it('should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]', () => {
        let actual = problem3('supercalifragilisticexpialidocious',(s) => s.replace(/c/gi,',c').split(','));
        let expected = ['super', 'califragilisti', 'cexpialido', 'cious'];
        expect(expected).to.eql(actual);
    });
    it('should return zsspolieeaML', () => {
        let s2 = 'MelissaLopez'
        let expected = 'zsspolieeaML'
        expect(expected).equal(reverse(s2));
    });
});