class Fibonacci {
	// O *pertence ao tipo de retorno. Esta função retorna void *, um ponteiro para algum local de memória de tipo não especificado.
	*execute(input, current = 0, next = 1) {
		// console.count('execute');
		if (input === 0) return 0;
		/* 
    A palavra-chave yield é usada para pausar e resumir uma generator function (function*).
    A palavra-chave yield pausa a execução de uma generator function e o valor da expressão em frente a palavra-chave yield é retornado para a chamada do generator. Ele pode ser considerado uma versão da palavra-chave return para o generator.
    */
		yield current;
		// Delega a função, mas não retorna o valor.
		yield* this.execute(input - 1, next, current + next);
	}
}

module.exports = Fibonacci;
