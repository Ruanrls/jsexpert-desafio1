const PokemonGetTeamController = require("../../presentation/controllers/get-team-controller");
const pokemonGetTeamController = new PokemonGetTeamController();

const GetHomePageController = require("../../presentation/controllers/get-homepage-controller");
const getHomePageController = new GetHomePageController();

const NotFoundController = require("../../presentation/controllers/not-found-controller");
const notFoundController = new NotFoundController();

const routes = {
  default: notFoundController.handle,
  "/:get": getHomePageController.handle,
  "/team:get": pokemonGetTeamController.handle,
};

module.exports = routes;
