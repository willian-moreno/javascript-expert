const BaseRepository = require('./../repository/base/BaseRepository');
const Tax = require('./../entities/Tax');
const Transaction = require('../entities/Transaction');
const { formatCurrencyToBRL, formatDateToDayMonthNameYear } = require('./../utils/utilFunctions');

class CarService {
	constructor({ cars }) {
		this.carRepository = new BaseRepository({ file: cars });
		this.taxesBasedOnAge = Tax.taxesBasedOnAge;
		this.currencyFormat = formatCurrencyToBRL;
	}

	getRandomPositionFromArray(array) {
		const listLength = array.length;
		return Math.floor(Math.random() * listLength);
	}

	chooseRandomCar(carCategory) {
		const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds);
		const carId = carCategory.carIds[randomCarIndex];
		return carId;
	}

	calculateFinalPrice(customer, carCategory, numberOfDays) {
		const { age } = customer;
		const { price } = carCategory;
		const { then: tax } = this.taxesBasedOnAge.find(({ from, to }) => age >= from && age <= to);

		const finalPrice = tax * price * numberOfDays;
		const formattedFinalPrice = this.currencyFormat(finalPrice);

		return formattedFinalPrice;
	}

	async rent(customer, carCategory, numberOfDays) {
		const car = await this.getAvailableCar(carCategory);
		const finalPrice = await this.calculateFinalPrice(customer, carCategory, numberOfDays);

		const today = new Date();
		today.setDate(today.getDate() + numberOfDays);
		const dueDate = formatDateToDayMonthNameYear(today);

		const transaction = new Transaction({ customer, dueDate, car, amount: finalPrice });
		return transaction;
	}

	async getAvailableCar(carCategory) {
		const carId = this.chooseRandomCar(carCategory);
		const car = await this.carRepository.find(carId);
		return car;
	}
}

module.exports = CarService;
