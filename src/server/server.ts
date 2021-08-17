import { fastify } from "fastify";
import { config } from "dotenv";

config();
const port = process.env.PORT || 9000;

const app = fastify({
	logger: true
});

const start = async () => {
	try {
		await app.listen(port);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}

const stop = async () => {
	try {
		await app.close();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}

export { app, start, stop }