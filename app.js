import redis from "./redis.js";
import routes from "./routes.js";

export default async (fastify, opts) => {
  fastify.register(redis);
  fastify.register(routes);
};
