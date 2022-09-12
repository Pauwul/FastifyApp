// import dependencies from npm
import Fastify from "fastify";
// const path = require("path");
// const uuidv4 = require("uuid");
import uuidv4 from "uuidv4";
// create request ids

const createRequestId = () => uuidv4();

// create server fucntion

export const createServer = (options) => {
  const { logSeverity } = options;
  // create the server
  const server = Fastify({
    ignoreTrailingSlash: true,
    logger: {
      genReqId: createRequestId,
      level: "info",
    },
  });

  server.get("/", async function (request, reply) {
    return { hi: "human" };
  });

  // start el server

  server.listen({ port: 9000 }, (err) => {
    if (err) {
      server.log.error(err);
      console.log(err);
      process.exit(1);
    }

    server.log.info("Server Started");
  });
};
