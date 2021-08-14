import { FastifyInstance } from "fastify";

export async function routes(fastify: FastifyInstance) {
	fastify.get('/', async (req, reply) => {
		reply.send({ hello: "world" });
	});
}