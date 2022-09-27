class Fibonacci {
	// O *pertence ao tipo de retorno. Esta fun��o retorna void *, um ponteiro para algum local de mem�ria de tipo n�o especificado.
	*execute(input, current = 0, next = 1) {
		// console.count('execute');
		if (input === 0) return 0;
		/* 
    A palavra-chave yield � usada para pausar e resumir uma generator function (function*).
    A palavra-chave yield pausa a execu��o de uma generator function e o valor da express�o em frente a palavra-chave yield � retornado para a chamada do generator. Ele pode ser considerado uma vers�o da palavra-chave return para o generator.
    */
		yield current;
		// Delega a fun��o, mas n�o retorna o valor.
		yield* this.execute(input - 1, next, current + next);
	}
}

module.exports = Fibonacci;
