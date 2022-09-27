// Tipo de Valor vs Tipo de Refer�ncia (Immutability vs Mutability)
const { deepStrictEqual } = require('assert');
let counter = 0;
let counter2 = counter;
counter2++;
// ?

const item = { counter: 0 };
const item2 = item;

// Tipo primitivo gera uma c�pia em mem�ria
deepStrictEqual(counter, 0);
deepStrictEqual(counter2, 1);

// Tipo de refer�ncia copia o endere�o de mem�ria e aponta para o mesmo lugar
item2.counter++;
deepStrictEqual(item, { counter: 1 });
item.counter++;
deepStrictEqual(item2, { counter: 2 });
