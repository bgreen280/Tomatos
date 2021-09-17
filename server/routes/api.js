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
import { Router } from 'express';

import tomatosController from '../controllers/tomatoesController';

const router = Router();

/*
* Create Routes 
*/
router.post('/events',
    tomatosController.createName(), // if name in names collection, continue
    tomatosController.createLabel(), // if label in labels, continue
    tomatosController.createEvent(),
    tomatosController.updateName(),
    tomatosController.updateLabel(),
    (_req, res) => res.status(200).json(res.locals.events)
);

/*
 * Getter Routes 
*/
router.get('/events',
    tomatosController.getEvent(),    
    tomatosController.getEvents(),
    (_req, res) => res.status(200).json(res.locals.events)
);

router.get('/labels',
    tomatosController.getLabels(),
    tomatosController.getLabel(),
    (_req, res) => res.status(200).json(res.locals.labels)
);

router.get('/names',
    tomatosController.getNames(),
    tomatosController.getName(),
    (_req, res) => res.status(200).json(res.locals.names)
);

/*
 * Update Routes 
*/
router.put('/events',
    tomatosController.updateEvent(),
    (_req, res) => res.status(200).json(res.locals.events)
);

router.put('/labels',
    tomatosController.updateLabel(),   
    (_req, res) => res.status(200).json(res.locals.labels)
);

router.put('/names',
    tomatosController.updateName(),
    (_req, res) => res.status(200).json(res.locals.names)
);

/*
 * Delete Routes 
*/
router.delete('/events',
    tomatosController.deleteEvent(),
    (_req, res) => res.status(200).json(res.locals.events)
);

router.delete('/labels',
    tomatosController.deleteLabel(),   
    (_req, res) => res.status(200).json(res.locals.labels)
);

router.delete('/names',
    tomatosController.deleteName(),   
    (_req, res) => res.status(200).json(res.locals.names)
);

export default router;


// router.get('/',
//     // tomatosController
//     // starWarsController.getCharacters,
//     // (req, res) => res.status(200).json(res.locals.characters)
// );


// router.post('/names',
//     tomatosController.createName(),   
//     (_req, res) => res.status(200).json(res.locals.names)
// );

// router.post('/labels',
//     tomatosController.createEvent(), 
//     (_req, res) => res.status(200).json(res.locals.labels)
// );
