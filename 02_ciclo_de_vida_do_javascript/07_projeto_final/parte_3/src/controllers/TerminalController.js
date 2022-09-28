import readline from 'readline';
import TableController from './TableController.js';
import Draftlog from 'draftlog';
import chalk from 'chalk';

export default class TerminalController extends TableController {
	constructor() {
		super();
	}

	question(msg = '') {
		return new Promise((resolve) => this.terminal.question(msg, resolve));
	}

	initializeTerminal(database, language) {
		console.clear();

		Draftlog(console).addLineListener(process.stdin);
		this.terminal = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		this.initializeTable(database, language);
		console.info(chalk.greenBright('\n  Terminal Initialized'));
		console.info(chalk.cyan('\n  Insert the values on order: ID Vehicles KmTraveled From To'));
		console.info(chalk.cyan('  Exemple: 1 Moto,Carro,Bike 23000 2000-04-09 2022-09-28'));
		console.info(
			chalk.cyan(
				'  Where: ID => 1 | Vehicles => Moto,Carro,Bike | KmTraveled => 23000 | From => 2000-04-09 | To => 2022-09-28',
			),
		);
		console.info(chalk.cyan("  Info: Vehicles list are separated by ','\n"));
	}

	closeTerminal() {
		this.terminal.close();
	}
}
