'use strict';

const {
	watch,
	promises: { readFile },
} = require('fs');

class File {
	watch(event, filename) {
		// Referência do objeto.
		console.log('this: ', this);

		// Lista de argumentos que foram passados para a função. (Considerado uma má prática)
		// Array.prototype.slice.call nesse caso trás o resultado em formato de array. Antes era objeto.
		console.log('arguments: ', Array.prototype.slice.call(arguments));

		this.showContent(filename);
	}

	async showContent(filename) {
		console.log((await readFile(filename)).toString());
	}
}

const file = new File();
// Dessa forma, ele ignora o 'this' da classe File e herda o 'this' do watch.
// watch(__filename, file.watch);

// Alternativa para não atribuir ao 'this' a referência do watch.

//1. Usando uma arrow function
// watch(__filename, (event, filename) => file.watch(event, filename));

//2. Usando o bind
// O bind retorna uma função com o 'this' que se mantém de file, ignorando o watch.
//watch(__filename, file.watch.bind(file));

//3. Usando o call
// file.watch.call(file, null, __filename);

//4. Usando o apply
file.watch.apply(file, [null, __filename]);

/**
 * Referências
 * [Creating an Application Performance Monitor Using Node 14 New and Experimental Features]
 * {@link https://medium.com/@erickwendel/node-v14-x-is-up-deep-diving-into-new-features-ace6dd89ac0b}
 */
