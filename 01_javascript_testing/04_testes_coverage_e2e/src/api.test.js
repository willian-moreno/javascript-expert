const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');
const app = require('./api');

describe('API Suite Test', () => {
	describe('/contact', () => {
		it('should request the contact page and return HTTP Status 200', async () => {
			const response = await request(app).get('/contact').expect(200);
			assert.deepStrictEqual(response.text, 'Contact page');
		});
	});

	describe('/hello', () => {
		it('should request an inexistent route /hi and redirect to /hello', async () => {
			const response = await request(app).get('/hi').expect(200);
			assert.deepStrictEqual(response.text, 'Hello World');
		});
	});

	describe('/login', () => {
		it('should login successfully on the login route and return HTTP Status 200', async () => {
			const response = await request(app)
				.post('/login')
				.send({ username: 'willian_moreno', password: '123' })
				.expect(200);
			assert.deepStrictEqual(response.text, 'Logging has succeeded');
		});

		it('should unauthorized a request when requesting it using wrong credencials and return HTTP Status 401', async () => {
			const response = await request(app)
				.post('/login')
				.send({ username: 'teste teste', password: '125' })
				.expect(401);

			assert.ok(response.unauthorized);
			assert.deepStrictEqual(response.text, 'Loggin failed.');
		});
	});
});
