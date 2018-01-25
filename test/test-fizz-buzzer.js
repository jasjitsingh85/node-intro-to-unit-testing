const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {

	it('should return "fizz", "buzz" or "fizz buzzer"', function() {

		const normalCases = [
			{num: 30, expected: 'fizz-buzz'},
			{num: 10, expected: 'buzz'}
		]

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected)
		});

	});

});