import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
	// Não tem __filename e __dirname
	const { pathname } = new URL('./../../database.json', import.meta.url);
	const databaseFile = pathname.indexOf(':') ? pathname.split(':', 2)[1] : pathname;
	const currentData = JSON.parse(await readFile(databaseFile));

	currentData.push(data);
	await writeFile(databaseFile, JSON.stringify(currentData));
};
