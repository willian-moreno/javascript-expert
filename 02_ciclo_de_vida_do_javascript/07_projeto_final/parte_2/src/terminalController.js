import chalk from 'chalk';
import chalkTable from 'chalk-table';
import readline from 'readline';
import Person from './person.js';
import Draftlog from 'draftlog';

export default class TerminalController {
	constructor() {
		this.print = {};
		this.data = {};
	}

	question(msg = '') {
		return new Promise((resolve) => this.terminal.question(msg, resolve));
	}

	initializeTerminal(database, language) {
		Draftlog(console).addLineListener(process.stdin);
		this.terminal = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		this.#initializeTable(database, language);
	}

	closeTerminal() {
		this.terminal.close();
	}

	#initializeTable(database, language) {
		const options = TerminalController.#getTableOptions();
		const data = database.map((item) => new Person(item).formatted(language));
		const table = chalkTable(options, data);

		this.print = console.draft(table);
		this.data = data;
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
