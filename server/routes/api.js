/*
* Controls internal API routes
* Routes may pass through several controller methods
* Routes Include:
*   Post: Events
*   Get: Events, Labels, Names
*   Put: Events, Labels, Names
*   Delete: Events, Labels, Names
* 
* TODO: add methods to handle single/multi/all query requests
*/
const Router = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const tomatoesController = require ('../controllers/tomatoesController');

const router = Router();

/*
* Create Routes 
*/
router.post('/events',
    tomatoesController.createName, // if name in names collection, continue
    tomatoesController.createLabel, // if label in labels, continue
    tomatoesController.createEvent,
    tomatoesController.updateName,
    tomatoesController.updateLabel,
    (_req, res) => res.status(200).json(res.locals.events)
);

/*
 * Getter Routes 
*/
router.get('/events',
    tomatoesController.getEvent,    
    tomatoesController.getEvents,
    (_req, res) => res.status(200).json(res.locals.events)
);

router.get('/labels',
    tomatoesController.getLabels,
    tomatoesController.getLabel,
    (_req, res) => res.status(200).json(res.locals.labels)
);

router.get('/names',
    tomatoesController.getNames,
    tomatoesController.getName,
    (_req, res) => res.status(200).json(res.locals.names)
);

/*
 * Update Routes 
*/
router.put('/events',
    tomatoesController.updateEvent,
    (_req, res) => res.status(200).json(res.locals.events)
);

router.put('/labels',
    tomatoesController.updateLabel,   
    (_req, res) => res.status(200).json(res.locals.labels)
);

router.put('/names',
    tomatoesController.updateName,
    (_req, res) => res.status(200).json(res.locals.names)
);

/*
 * Delete Routes 
*/
router.delete('/events',
    tomatoesController.deleteEvent,
    (_req, res) => res.status(200).json(res.locals.events)
);

router.delete('/labels',
    tomatoesController.deleteLabel,   
    (_req, res) => res.status(200).json(res.locals.labels)
);

router.delete('/names',
    tomatoesController.deleteName,   
    (_req, res) => res.status(200).json(res.locals.names)
);

// router.get('/',
//     // tomatoesController
//     // starWarsController.getCharacters,
//     // (req, res) => res.status(200).json(res.locals.characters)
// );


// router.post('/names',
//     tomatoesController.createName(),   
//     (_req, res) => res.status(200).json(res.locals.names)
// );

// router.post('/labels',
//     tomatoesController.createEvent(), 
//     (_req, res) => res.status(200).json(res.locals.labels)
// );

module.exports = router;