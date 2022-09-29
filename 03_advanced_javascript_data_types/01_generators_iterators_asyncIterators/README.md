## Generators, Iterators e Async Iterators

### Generators

1. Os Generators fazem com que as funções se tornem listas.

_O objeto `Generator` é retornado por generator function e conforme iterable protocol e o iterator protocol._

_Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido à necessidade de manter explícito seu estado interno. Generators provêm uma alternativa poderosa: eles te permitem definir um algorítimo iterativo escrevendo uma função simples que pode manter seu estado próprio._

_Generator é um tipo especial de função que trabalha como uma factory para iteradores. A função vira um generator se ela contém uma ou mais expressões `yield` e se ela usa a sintaxe `function\*`._

#### Síntaxe

```javascript
function* gen() {
	yield 1;
	yield 2;
	yield 3;
}

var g = gen(); // "Generator { }"
```

### Iterators (Iteradores)

_Um objeto é um iterator (iterador) quando sabe como acessar itens numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência. Em JavaScript um iterator é um objeto que oferece o método `next()`, o qual retorna o próximo item da sequência. Este método retorna um objeto com duas propriedades: `done` e `value`._

#### Síntaxe esperada dos Iterators

_Algumas declarações e expressões esperam por iteradores, por exemplo o `for-of` loops, `spread operator`, ``yield_``, e `destructuring assignment`.

```javascript
for (let value of ['a', 'b', 'c']) {
	console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", "b", "c"]

function* gen() {
	yield* ['a', 'b', 'c'];
}

gen().next()[(a, b, c)] = // { value:"a", done:false }
	new Set(['a', 'b', 'c']);
a; // "a"
```

### Async Iterators

_O Symbol.asyncIterator é um símbolo conhecido que especifica o padrão AsyncIterator para um objeto. Se essa propriedade é configurada em um objeto, é um iterável assíncrono e pode ser usado in um `for await...of` loop._

#### Exemplos

##### Iteráveis assíncronos definidos pelo usuário

_Você consegue definir seu próprio iterável assíncrono configurando a propriedade \[Symbol.asyncIterator\] em um objeto._

```javascript
const myAsyncIterable = {
	async *[Symbol.asyncIterator]() {
		yield 'hello';
		yield 'async';
		yield 'iteration!';
	},
};

(async () => {
	for await (const x of myAsyncIterable) {
		console.log(x);
		// resultado esperado:
		//    "hello"
		//    "async"
		//    "iteration!"
	}
})();
```

---

#### Referências

[Generator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generator#s%C3%ADntaxe)<br>
[Iteratores e geradores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Iterators_and_Generators)<br>
[Symbol.asyncIterator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)<br>
[Async iterators and generators](https://jakearchibald.com/2017/async-iterators-and-generators/)<br>
[Async iteration and generators](https://javascript.info/async-iterators-generators)<br>
