"use strict";
const http = require("http");

const PokemonService = require("./application/service/pokemon-service");
const PokemonRepository = require("./infra/pokeapi/pokemon-repository");

const routes = {
  default: (_, response) => {
    response.writeHead(301, { Location: "/" });
    return response.end();
  },
  "/:get": (_, response) => {
    const responseToSend = {
      response: "Hello World",
    };
    return response.end(JSON.stringify(responseToSend));
  },
  "/team:get": async (_, response) => {
    const pokemonRepository = new PokemonRepository();
    const pokemonService = new PokemonService(pokemonRepository);
    const pokemons = await pokemonService.getTeam();

    return response.end(JSON.stringify(pokemons));
  },
};

const handler = (request, response) => {
  const { url, method } = request;
  const route = `${url}:${method.toLowerCase()}`;
  const handler = routes[route] || routes.default;

  response.writeHead(200, {
    "Content-Type": "application/json",
  });

  handler(request, response);
};

const server = http.createServer(handler);

server.listen(8000, () => {
  console.log("Server started on port 8000");
});

module.exports = server;
