"use strict";
const http = require("http");
const routes = require("./routes");

const handler = (request, response) => {
  const { url, method } = request;
  const path = url.split("?")[0];

  const route = `${path}:${method.toLowerCase()}`;
  const handler = routes[route] || routes.default;

  response.writeHead(200, {
    "Content-Type": "application/json",
  });

  handler(request, response);
};

const server = http.createServer(handler);

module.exports = server;
