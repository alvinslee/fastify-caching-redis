const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

import fp from "fastify-plugin";
import redis from "@fastify/redis";

const parseRedisUrl = (redisUrl) => {
  const url = new URL(redisUrl);
  const password = url.password;
  return {
    host: url.hostname,
    port: url.port,
    password,
  };
};

export default fp(async (fastify) => {
  fastify.register(redis, parseRedisUrl(REDIS_URL));
});
