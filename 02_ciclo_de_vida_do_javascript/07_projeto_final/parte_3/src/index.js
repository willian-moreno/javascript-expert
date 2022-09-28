import database from './../database.json' assert { type: 'json' };
import TerminalController from './controllers/TerminalController.js';
import Person from './models/Person.js';
import { DEFAULT_LANG, STOP_TERM } from './constants.js';
import { save } from './repository/Repository.js';

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
	try {
		// 1 Moto,Carro,Bike 23000 2000-04-09 2022-09-28
		const answer = await terminalController.question();
		if (answer === STOP_TERM) {
			terminalController.closeTerminal();
			console.info('process finished.');
			return;
		}

		const person = Person.generateInstanceFromString(answer);
		terminalController.updateTable(person.formatted(DEFAULT_LANG));
		await save(person);
		return mainLoop();
	} catch (error) {
		console.error('Error: ', error);
		return mainLoop();
	}
}

await mainLoop();
