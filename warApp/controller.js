const pool = require('../db')
const queries = require('./queries')

const getPokemon = (req, res) => {
    pool.query(queries.getPokemon, (error, results) => {
        if(error) console.log(error);
        res.json(results.rows)
    })
}

const getPokemonByPokedex = (req, res) => {
    const pokedex = parseInt(req.params.pokedex);
    pool.query(queries.getPokemonByPokedex, [pokedex], (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getPokemon,
    getPokemonByPokedex
}