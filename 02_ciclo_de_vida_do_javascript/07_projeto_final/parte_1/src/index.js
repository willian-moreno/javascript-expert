import database from './../database.json' assert { type: 'json' };
import Draftlog from 'draftlog';
import chalk from 'chalk';
import chalkTable from 'chalk-table';
import readline from 'readline';
import Person from './person.js';

Draftlog(console).addLineListener(process.stdin);

const DEFAULT_LANG = 'pt-BR';
const options = {
	leftPad: 2,
	columns: [
		{ field: 'id', name: chalk.blueBright('ID') },
		{ field: 'vehicles', name: chalk.magenta('Vehicles') },
		{ field: 'kmTraveled', name: chalk.blueBright('Km Traveled') },
		{ field: 'from', name: chalk.blueBright('From') },
		{ field: 'to', name: chalk.blueBright('To') },
	],
};

const table = chalkTable(
	options,
	database.map((item) => new Person(item).formatted(DEFAULT_LANG)),
);

const print = console.draft(table);

const terminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

terminal.question("What's your name? ", (msg) => {
	console.log('Olá, %s', msg);
});
