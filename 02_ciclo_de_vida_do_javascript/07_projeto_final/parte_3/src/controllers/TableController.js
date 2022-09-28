import chalk from 'chalk';
import chalkTable from 'chalk-table';
import Person from '../models/Person.js';
import database from './../../database.json' assert { type: 'json' };

export default class TableController {
	constructor() {
		this.print = {};
		this.data = database || [];
	}

	initializeTable(database, language) {
		const options = TableController.#getTableOptions();
		const data = database.map((item) => new Person(item).formatted(language));
		const table = chalkTable(options, data);

		this.print = console.draft(table);
		this.data = data;
	}

	updateTable(data) {
		const options = TableController.#getTableOptions();
		this.data.push(data);
		this.print(chalkTable(options, this.data));
	}

	static #getTableOptions() {
		return {
			leftPad: 2,
			columns: [
				{ field: 'id', name: chalk.blueBright('ID') },
				{ field: 'vehicles', name: chalk.magenta('Vehicles') },
				{ field: 'kmTraveled', name: chalk.blueBright('Km Traveled') },
				{ field: 'from', name: chalk.blueBright('From') },
				{ field: 'to', name: chalk.blueBright('To') },
			],
		};
	}
}
