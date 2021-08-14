import { expect } from "chai";
import { app, start } from "server/server";

describe("server startup", () => {

	beforeEach(() => {

	});

	it("server successfully startup", () => {
		expect(start());
		expect(app).to.be.eq([]);
	});

	it("server should be listening on port 9000", () => {

	});
});