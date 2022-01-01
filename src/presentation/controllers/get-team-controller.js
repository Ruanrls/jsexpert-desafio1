const Controller = require("../adapters/controller");
const PokemonRepository = require("../../infra/pokeapi/pokemon-repository");
const PokemonService = require("../../application/service/pokemon-service");

const pokemonRepository = new PokemonRepository();
const pokemonService = new PokemonService(pokemonRepository);

class GetTeamController extends Controller {
  constructor(callback = pokemonService.getTeam) {
    super(callback);
  }
}

module.exports = GetTeamController;
