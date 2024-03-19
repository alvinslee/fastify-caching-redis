import fs from "fs";

const readData = () => {
  try {
    const data = fs.readFileSync("data.txt", "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
};

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default async function (fastify, _opts) {
  fastify.get("/api/health", async (_, reply) => {
    return reply.send({ status: "ok" });
  });

  fastify.get("/api/user-data", async (_, reply) => {
    const { redis } = fastify;

    // check if data is in cache
    const data = await redis.get("user-data", (err, val) => {
      if (val) {
        return { data: val };
      }
      return null;
    });

    if (data) {
      return reply.send(data);
    }

    await sleep(5000);
    const userData = readData();

    // add data to the cache
    redis.set("user-data", userData);

    return reply.send({ data: userData });
  });
}
