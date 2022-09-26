const Service = require('./service');
const sinon = require('sinon');
const { deepStrictEqual } = require('assert');
const BASE_URL = {
	planets: {
		1: 'https://swapi.dev/api/planets/1/',
		2: 'https://swapi.dev/api/planets/2/',
	},
};
const mocks = {
	tatooine: require('./mocks/tatooine.json'),
	alderaan: require('./mocks/alderaan.json'),
};

(async () => {
	/*
  Sem Stub - Faz requisição externa
	{
		const service = new Service();
		const withoutStub = await service.makeRequest(BASE_URL.planets[1]);
		console.log(withoutStub);
	}
  */

	const service = new Service();
	const stub = sinon.stub(service, service.makeRequest.name);

	stub.withArgs(BASE_URL.planets[1]).resolves(mocks.tatooine);
	stub.withArgs(BASE_URL.planets[2]).resolves(mocks.alderaan);

	{
		const expected = {
			name: 'Tatooine',
			surfaceWater: '1',
			appearedIn: 5,
		};
		const result = await service.getPlanets(BASE_URL.planets[1]);
		deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
	}

	{
		const expected = {
			name: 'Alderaan',
			surfaceWater: '40',
			appearedIn: 2,
		};
		const result = await service.getPlanets(BASE_URL.planets[2]);
		deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
	}
})();
