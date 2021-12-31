const https = require("https");
const { MAX_MOVES_TO_SHOW } = require("../config/constants");

class PokemonRepository {
  constructor() {}

  static async request(options) {
    return new Promise((resolve, reject) => {
      const req = https.request(options, (response) => {
        let chunk = "";
        response.on("data", (data) => (chunk += data));
        response.on("error", (error) => reject(error));
        response.on("end", () => resolve(JSON.parse(chunk)));
      });
      req.end();
    });
  }

  static async formatPokemonData(pokemon, movesToShow = MAX_MOVES_TO_SHOW) {
    const { name, moves: allMoves } = pokemon;
    const moves = allMoves.slice(0, movesToShow).map(({ move }) => move.name);

    return {
      name,
      moves,
    };
  }

  async getPokemon(pokemonId) {
    const options = {
      hostname: "pokeapi.co",
      path: `/api/v2/pokemon/${pokemonId}`,
      method: "GET",
    };

    const response = await PokemonRepository.request(options);
    const formattedPokemon = PokemonRepository.formatPokemonData(response);
    return formattedPokemon;
  }
}

module.exports = PokemonRepository;
