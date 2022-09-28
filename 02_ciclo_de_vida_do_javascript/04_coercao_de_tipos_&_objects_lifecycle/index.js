console.log('true + 2: ', true + 2); // 3
console.log('true - 2: ', true - 2); // -1
console.log("'21' + true: ", '21' + true); // '21true'
console.log("'21' - true: ", '21' - true); // 20
console.log('9999999999999999: ', 9999999999999999); // 10000000000000000
console.log('0.1 + 0.2: ', 0.1 + 0.2); // 0.30000000000000004
console.log('3 > 2: ', 3 > 2); // true
console.log('3 > 2 > 1: ', 3 > 2 > 1); // false
console.log('3 > 2 >= 1: ', 3 > 2 >= 1); // true
console.log("'21' - -1: ", '21' - -1); // 22
console.log("'1' == 1: ", '1' == 1); // true
console.log("'1' === 1: ", '1' === 1); // false
console.log("'B' + 'a' + +'a' + 'a': ", 'B' + 'a' + +'a' + 'a'); // BaNaNa

// ----------------------------------------------------------------------------------------

String(123); // Conversão explícita
console.assert(String(123) === '123', 'explicit convertion');

123 + ''; // Conversão implícita
console.assert(123 + '' === '123', 'implicit convertion');

if (null || 123) console.log('null || 123');
if ('hello' || 123) console.log("'hello' || 123");

const r = 'hello' || 123;
console.log(r); // 'hello'
if (r) console.log("r => 'hello' || 123");
console.assert(
	('hello' || 123) === 'hello',
	'|| returns the first element, just case first is true.',
);
console.assert(('hello' && 123) === 123, '&& returns the last element, case both are true.');

// ----------------------------------------------------------------------------------------

const item = {
	name: 'Willian Moreno',
	age: 22,
};

console.log('object item + 0: ', item + 0);

const itemCoercao = {
	name: 'Willian Moreno',
	age: 22,
	// Se string: se não for do tipo primitivo, chama o valueOf
	toString() {
		return `name: ${this.name}, age: ${this.age}`;
	},
	// Se number: se não for do tipo primitivo, chama o toString
	valueOf() {
		return 007;
	},
};

console.log('object itemCoercao + 0: ', itemCoercao + 0);
console.log('concat itemCoercao: ', ''.concat(itemCoercao));
console.log('toString itemCoercao: ', String(itemCoercao)); // name: Willian Moreno, age: 22
console.log('valueOf itemCoercao: ', Number(itemCoercao)); // 7

const itemCoercao2 = {
	name: 'Willian Moreno',
	age: 22,
	// Se string: se não for do tipo primitivo, chama o valueOf
	toString() {
		console.log('itemCoercao2: passou por aqui.');
		return `name: ${this.name}, age: ${this.age}`;
	},
	// Se number: se não for do tipo primitivo, chama o toString
	valueOf() {
		return { chamaToString: 'helloo!' };
	},
};

console.log('toString itemCoercao2: ', String(itemCoercao2)); // name: Willian Moreno, age: 22
console.log('valueOf itemCoercao2: ', Number(itemCoercao2)); // NaN -> Retornou NaN, pois toString retornou uma string.

const itemCoercao3 = {
	name: 'Willian Moreno',
	age: 22,
	// Se string: se não for do tipo primitivo, chama o valueOf
	toString() {
		console.log('itemCoercao2: passou por aqui.');
		return `name: ${this.name}, age: ${this.age}`;
	},
	// Se number: se não for do tipo primitivo, chama o toString
	valueOf() {
		return { chamaToString: 'helloo!' };
	},
	// Symbol - Possui prioridade sobre os anteriores.
	[Symbol.toPrimitive](coersionType) {
		console.log('itemCoercao3 - trying to convert to: ', coersionType);
		const types = {
			string: JSON.stringify(this),
			number: '0007',
		};

		return types[coersionType] || types.string;
	},
};

console.log('toString itemCoercao3: ', String(itemCoercao3));
console.log('valueOf itemCoercao3: ', Number(itemCoercao3));
console.log('Date itemCoercao3: ', new Date(itemCoercao3));

console.assert(itemCoercao3 + 0 === '{"name":"Willian Moreno","age":22}0');
// console.log('!!itemCoercao3 is true?: ', !!itemCoercao3);
console.assert(!!itemCoercao3);

// console.log('String.concat: ', 'Ola'.concat(itemCoercao3));
console.assert('Ola'.concat(itemCoercao3) === 'Ola{"name":"Willian Moreno","age":22}');

// console.log('implicit + explicit coercion (using ==)', itemCoercao3 == String(itemCoercao3));
console.assert(itemCoercao3 == String(itemCoercao3));

const item2 = { ...itemCoercao3, name: 'Fulano', age: 23 };
console.log('item2: ', item2);
