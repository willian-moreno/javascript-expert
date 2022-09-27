const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
	{
		const filePath = './mocks/emptyFile-invalid.csv';
		const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
		const result = File.csvToJson(filePath);
		await rejects(result, rejection);
	}
	{
		const filePath = './mocks/fourItems-invalid.csv';
		const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
		const result = File.csvToJson(filePath);
		await rejects(result, rejection);
	}
	{
		const filePath = './mocks/threeItems-valid.csv';
		const result = File.parseCSVToJSON(await File.csvToJson(filePath));
		const expected = [
			{
				id: 1,
				name: 'Willian Moreno',
				profession: 'Full Stack Developer',
				birthDay: 2000,
			},
			{
				id: 2,
				name: 'Fulano',
				profession: 'JavaScript Specialist',
				birthDay: 1987,
			},
			{
				id: 3,
				name: 'Jão',
				profession: 'PHP Developer',
				birthDay: 1990,
			},
		];

		deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
	}
})();
