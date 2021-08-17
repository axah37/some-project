import { expect } from 'chai';
import { after, before } from 'mocha';
import { routes } from 'routes/route';
import { app, start, stop } from 'server/server';
import request from 'supertest';


describe("api test", () => {
	before(() => {
		start();
		app.register(routes);
	});

	after(() => {
		stop();
	});
	it("server successfully startup", () => {
		expect(app).to.exist;
	});

	it("ping route check", async () => {
		const res = await request(app.server).get('/ping');
		expect(res.status).eq(200);
		expect(res.body.hello).eq('world')
	});
});