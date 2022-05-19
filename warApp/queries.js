const getPokemon = "SELECT pokedex, name, type_1, type_2, total, weakness, immune, resistant FROM pokemon ORDER BY pokedex ASC"
const getPokemonByPokedex = "SELECT * FROM pokemon WHERE pokedex = $1" 

module.exports = {
    getPokemon,
    getPokemonByPokedex
}