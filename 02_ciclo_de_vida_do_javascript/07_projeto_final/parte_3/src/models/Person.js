export default class Person {
	constructor({ id, vehicles, kmTraveled, from, to }) {
		this.id = id;
		this.vehicles = vehicles;
		this.kmTraveled = kmTraveled;
		this.from = from;
		this.to = to;
	}

	formatted(language) {
		return {
			id: this.id,
			vehicles: new Intl.ListFormat(language, { style: 'long', type: 'conjunction' }).format(
				this.vehicles,
			),
			kmTraveled: new Intl.NumberFormat(language, { style: 'unit', unit: 'kilometer' }).format(
				this.kmTraveled,
			),
			from: Person.formatDateWithLongMonth(language, this.from),
			to: Person.formatDateWithLongMonth(language, this.to),
		};
	}

	static formatDateWithLongMonth(language, date) {
		const mapDate = (date) => {
			const [year, month, day] = date.split('-').map(Number);
			return new Date(year, month - 1, day);
		};

		return new Intl.DateTimeFormat(language, {
			month: 'long',
			day: '2-digit',
			year: 'numeric',
		}).format(mapDate(date));
	}

	static generateInstanceFromString(text) {
		const [id, vehicles, kmTraveled, from, to] = text.split(' ');
		const person = new Person({
			id,
			vehicles: vehicles.split(','),
			kmTraveled,
			from,
			to,
		});

		return person;
	}
}
