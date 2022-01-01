const {
  POKEMON_MAX_RANGE,
  DEFAULT_QUANTITY_OF_POKEMONS,
} = require("../../config/constants");

class PokemonService {
  constructor(PokemonRepository) {
    this.pokemonRepository = PokemonRepository;
  }

  getRandomPokemon = async (
    params = { maxPokemonRange: POKEMON_MAX_RANGE }
  ) => {
    const { maxPokemonRange } = params;

    const randomId = Math.floor(Math.random() * parseInt(maxPokemonRange)) + 1;
    const randomPokemon = await this.pokemonRepository.getPokemon(randomId);
    return randomPokemon;
  };

  getTeam = async (
    params = { quantityOfPokemons: DEFAULT_QUANTITY_OF_POKEMONS }
  ) => {
    const { quantityOfPokemons } = params;

    let pokemons = [];
    for await (const i of Array(parseInt(quantityOfPokemons))) {
      const randomPokemon = await this.getRandomPokemon();
      pokemons.push(randomPokemon);
    }

    const pokemonList = await Promise.all(pokemons);
    return {
      pokemons: pokemonList,
    };
  };
}

module.exports = PokemonService;
