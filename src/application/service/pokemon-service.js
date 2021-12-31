const {
  POKEMON_MAX_RANGE,
  DEFAULT_QUANTITY_OF_POKEMONS,
} = require("../../infra/config/constants");

class PokemonService {
  constructor(PokemonRepository) {
    this.pokemonRepository = PokemonRepository;
  }

  async getRandomPokemon(maxPokemonRange = POKEMON_MAX_RANGE) {
    const randomId = Math.floor(Math.random() * maxPokemonRange) + 1;
    const randomPokemon = await this.pokemonRepository.getPokemon(randomId);
    return randomPokemon;
  }

  async getTeam(quantityOfPokemons = DEFAULT_QUANTITY_OF_POKEMONS) {
    let pokemons = [];

    for await (const i of Array(quantityOfPokemons)) {
      const randomPokemon = await this.getRandomPokemon();
      pokemons.push(randomPokemon);
    }

    const pokemonList = await Promise.all(pokemons);
    return {
      pokemons: pokemonList,
    };
  }
}

module.exports = PokemonService;
