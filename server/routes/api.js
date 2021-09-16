const express = require('express');

const starWarsController = require('../controllers/starWarsController');
const tomatosController = require('../controllers/tomatoesController');

const router = express.Router();

router.get('/',
    // tomatosController
    // starWarsController.getCharacters,
    // (req, res) => res.status(200).json(res.locals.characters)
);

router.get('/events',
    // tomatoesController.createLabel(),
    // tomatoesController.createName(),
    // tomatoesController.createEvent()
    // starWarsController.getSpecies,
    (req, res) => res.status(200).json(res.locals.events)
);

router.get('/names',
    // tomatoesController   
    // starWarsController.getHomeworld,
    (req, res) => res.status(200).json(res.locals.names)
);

router.get('/labels',
    // tomatoesController   
    // starWarsController.getFilm,
    (req, res) => res.status(200).json(res.locals.labels)
);

module.exports = router;
