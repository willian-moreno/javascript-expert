import mocha from 'mocha';
import chai from 'chai';
import Person from './../../src/models/Person.js';
import { DEFAULT_LANG } from './../../src/constants.js';
import validFormattedPerson from '../mocks/valid-formattedPerson.js';
import validPersonInstance from '../mocks/valid-personInstance.js';

const { describe, it } = mocha;
const { expect } = chai;

describe('Person Tests', () => {
	it('should return a person instance from a string', () => {
		const data = 'b236b839 Motocicleta,Carro,Caminhão 12000 2009-01-01 2022-09-28';
		const expected = validPersonInstance;
		const result = Person.generateInstanceFromString(data);
		expect(result).to.be.deep.equal(expected);
	});

	it('should format values', () => {
		const data = 'b236b839 Motocicleta,Carro,Caminhão 12000 2009-01-01 2022-09-28';
		const expected = validFormattedPerson;
		const result = Person.generateInstanceFromString(data).formatted(DEFAULT_LANG);
		expect(result).to.be.deep.equal(expected);
	});
});
