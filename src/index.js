"use strict";

const http = require("http");

const handler = (request, response) => {};

const server = http.createServer(handler);

server.listen(8000, () => {
  console.log("Server started on port 8000");
});

module.exports = server;
