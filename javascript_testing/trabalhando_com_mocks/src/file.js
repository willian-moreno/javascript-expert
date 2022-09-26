const { readFile } = require('fs/promises');
const User = require('./user');
const { error } = require('./constants');

const DEFAULT_OPTION = {
	maxLines: 3,
	fields: ['id', 'name', 'profession', 'age'],
};

class File {
	static async csvToJson(filePath) {
		const content = await File.getFileContent(filePath);
		const { valid, error } = File.isValid(content);

		if (!valid) throw new Error(error);

		return content;
	}

	static async getFileContent(filePath) {
		return (await readFile(filePath)).toString('utf-8');
	}

	static isValid(csvString, options = DEFAULT_OPTION) {
		const [header, ...fileWithoutHeader] = csvString.split('\n');

		const isHeaderValid = header.trim() === options.fields.join(',').trim();
		if (!isHeaderValid) {
			return {
				error: error.FILE_FIELDS_ERROR_MESSAGE,
				valid: false,
			};
		}

		const isContentLengthAccepted =
			fileWithoutHeader.length > 0 && fileWithoutHeader.length <= options.maxLines;
		if (!isContentLengthAccepted) {
			return {
				error: error.FILE_LENGTH_ERROR_MESSAGE,
				valid: false,
			};
		}

		return {
			valid: true,
		};
	}

	static parseCSVToJSON(csvString) {
		const lines = csvString.split('\n');
		// Remove o primeiro item e insere na variável
		const firstLine = lines.shift();
		const header = firstLine.split(',');

		const users = lines.map((line) => {
			const columns = line.split(',');
			let user = {};

			for (const index in columns) {
				const propertieName = header[index].trim();
				const value = columns[index].trim();

				user[propertieName] = value;
			}

			return new User(user);
		});

		return users;
	}
}

module.exports = File;
