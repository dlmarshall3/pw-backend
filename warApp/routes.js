const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getPokemon);
router.get('/:pokedex', controller.getPokemonByPokedex)

module.exports = router;