const { describe, it, before, beforeEach, afterEach } = require('mocha');
const { join } = require('path');
const { expect } = require('chai');
const sinon = require('sinon');

const Transaction = require('../../src/entities/Transaction');
const CarService = require('./../../src/service/CarService');
const carsDatabase = join(__dirname, './../../database', 'cars.json');
const mocks = {
	validCarCategory: require('./../mocks/valid-carCategory.json'),
	validCar: require('./../mocks/valid-car.json'),
	validCustomer: require('./../mocks/valid-customer.json'),
};

describe('CarService Suite Tests', () => {
	let carService = {};
	let sandbox = {};

	before(() => {
		carService = new CarService({
			cars: carsDatabase,
		});
	});

	beforeEach(() => {
		// Criando uma instância antes de cada it
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		// Limpando a instância após cada it
		sandbox.restore();
	});

	it('should retrieve a random position from an array.', () => {
		const data = [0, 1, 2, 3, 4];
		const result = carService.getRandomPositionFromArray(data);
		expect(result).to.be.lte(data.length).and.be.gte(0);
	});

	it('should choose the first id from carIds in carCategory', () => {
		const carCategory = mocks.validCarCategory;
		const carIdIndex = 0;

		// Criando um stub para executar a função e retornar o valor escolhido.
		sandbox.stub(carService, carService.getRandomPositionFromArray.name).returns(carIdIndex);

		const result = carService.chooseRandomCar(carCategory);
		const expected = carCategory.carIds[carIdIndex];

		// Expera que a função seja chamada somente uma vez.
		expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok;
		expect(result).to.be.equal(expected);
	});

	it('given a CarCategory it should return an available car.', async () => {
		const car = mocks.validCar;
		const carCategory = Object.create(mocks.validCarCategory);
		carCategory.carIds = [car.id];

		// Quando a função find for chamada, irá retornar o carro válido.
		sandbox.stub(carService.carRepository, carService.carRepository.find.name).resolves(car);

		// Criando um spy para verificar, ao final, se a função chooseRandomCar foi chamada somente uma vez
		sandbox.spy(carService, carService.chooseRandomCar.name);

		const result = await carService.getAvailableCar(carCategory);
		const expected = car;

		/**
		 * Verificando se a função chooseRandomCar foi chamada somente uma vez.
		 * Verificando se a função find retornou exatamente o id experado.
		 * Verificando se o resultado é igual ao esperado.
		 */
		expect(carService.chooseRandomCar.calledOnce).to.be.ok;
		expect(carService.carRepository.find.calledWithExactly(car.id)).to.be.ok;
		expect(result).to.be.deep.equal(expected);
	});

	it('given a carCategory, customer and numberOfDays it should calculate final amount in currency BRL.', async () => {
		const customer = Object.create(mocks.validCustomer);
		customer.age = 50;
		const carCategory = Object.create(mocks.validCarCategory);
		carCategory.price = 37.6;
		const numberOfDays = 5;

		// Criando um stub para não depender de dados externos.
		/**
		 * Se a função taxesBasedOnAge for chamada, ela retornará um objeto estático.
		 */
		sandbox.stub(carService, 'taxesBasedOnAge').get(() => [{ from: 40, to: 50, then: 1.3 }]);

		/**
		 * age: 50, tax: 1.3, categoryPrice: 37.6
		 * ((price per day * Tax) * number of days)
		 * ((37.6 * 1.3) * 5) = 244.40
		 */
		const expected = carService.currencyFormat(244.4);
		const result = carService.calculateFinalPrice(customer, carCategory, numberOfDays);

		expect(result).to.be.equal(expected);
	});

	it('given a customer and a car category it should return a transaction receipt.', async () => {
		const car = mocks.validCar;
		const carCategory = { ...mocks.validCarCategory, price: 37.6, carIds: [car.id] };
		const customer = Object.create(mocks.validCustomer);
		customer.age = 20;
		const numberOfDays = 5;
		const dueDate = '10 de novembro de 2020';
		const now = new Date(2020, 10, 5);

    // Quando o new Date for chamado, retornará a data do dia 05/11/2020
		sandbox.useFakeTimers(now.getTime());
    // Garantindo que o carro a ser utilizado será o do mock
		sandbox.stub(carService.carRepository, carService.carRepository.find.name).resolves(car);
		/**
		 * age: 20, tax: 1.1, categoryPrice: 37.6
		 * ((price per day * Tax) * number of days)
		 * ((37.6 * 1.1) * 5) = 206.80
		 */
		const expectedAmount = carService.currencyFormat(206.8);
		const result = await carService.rent(customer, carCategory, numberOfDays);
		const expected = new Transaction({ customer, car, amount: expectedAmount, dueDate });

		expect(result).to.be.deep.equal(expected);
	});
});
