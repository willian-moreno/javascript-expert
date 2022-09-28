import database from './../database.json' assert { type: 'json' };
import TerminalController from './terminalController.js';
import Person from './person.js';

const DEFAULT_LANG = 'pt-BR';
const STOP_TERM = ':q';

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
	try {
		console.info('\n+----------Terminal Started----------+\n');
		// 1 Moto,Carro,Bike 23000 2000-04-09 2022-09-28
		const answer = await terminalController.question();
		if (answer === STOP_TERM) {
			terminalController.closeTerminal();
			console.info('process finished.');
			return;
		}

		const person = Person.generateInstanceFromString(answer);

		console.log(person.formatted(DEFAULT_LANG));

		return mainLoop();
	} catch (error) {
		console.error('Error: ', error);
		return mainLoop();
	}
}

await mainLoop();
