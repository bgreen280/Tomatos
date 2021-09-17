/*
* Controls all database CRUD operations 
* Methods Include:
*   Create / Get / Update / Delete
*   for Events / Labels / Names Collections
*   
* TODO: review update and create methods
*/
import { Event, Label, Name } from '../models/tomatoModel';

const tomatosController = {};

// create event 
tomatosController.createEvent = async (req, res, next) => {
    try {
        const {
            id,
            time,
            duration,
            additionalTime,
            labels,
            name
        } = req.body

        const addedEventDoc = await Event.create({
            id,
            time,
            duration,
            additionalTime,
            labels,
            name            
        })
        res.locals.events = addedEventDoc;
        next();
    } catch (err) {
        return next({
            log: `error in create event: Error=${err}`,
            message: { err: 'error in create event'}
        });
    }
};

// create label
tomatosController.createLabel = async (req, res, next) => {
    try {
        const {
            name,
            id
        } = req.body

        const addedLabelDoc = await Event.create({
            name,
            id          
        })
        res.locals.events = addedLabelDoc;
        next();
    } catch (err) {
        return next({
            log: `error in create label: Error=${err}`,
            message: { err: 'error in create label'}
        });
    }
};
// create name
tomatosController.createName = async (req, res, next) => {
    try {
        const {
            name,
            id
        } = req.body

        const addednameDoc = await Event.create({
            name,
            id          
        })
        res.locals.events = addednameDoc;
        next();
    } catch (err) {
        return next({
            log: `error in create name: Error=${err}`,
            message: { err: 'error in create name'}
        });
    }
};

/*
* Read Functions
*/
// get events
tomatosController.getEvents = async (_req, _res, next) => {
    try {
        if (req.body.id) { next() }
        await Event.findAll( {} );
        next();
    } catch (err) {
        return next({
            log: `error in get events: Error=${err}`,
            message: { err: 'error in get events'}
        });
    } 
}
// get labels
tomatosController.getLabels = async (_req, _res, next) => {
    try {
        if (req.body.id) { next() }
        await Label.findAll( {} );
        next();
    } catch (err) {
        return next({
            log: `error in get labels: Error=${err}`,
            message: { err: 'error in get labels'}
        });
    } 
}
// get names
tomatosController.getNames = async (_req, _res, next) => {
    try {
        if (req.body.id) { next() }
        await Name.findAll( {} );
        next();
    } catch (err) {
        return next({
            log: `error in get names: Error=${err}`,
            message: { err: 'error in get names'}
        });
    } 
}

/*
* Read Functions
*/
// get event
tomatosController.getEvent = async (_req, _res, next) => {
    const { _id } = _req.body;
    try {
        await Event.findOne( { _id } );
        next();
    } catch (err) {
        return next({
            log: `error in get event: Error=${err}`,
            message: { err: 'error in get event'}
        });
    } 
}
// get label
tomatosController.getLabel = async (_req, _res, next) => {
    const { _id } = _req.body;
    try {
        await Event.findOne( { _id } );
        next();
    } catch (err) {
        return next({
            log: `error in get label: Error=${err}`,
            message: { err: 'error in get label'}
        });
    } 
}
// get name
tomatosController.getName = async (_req, _res, next) => {
    const { _id } = _req.body;
    try {
        await Event.findOne( { _id } );
        next();
    } catch (err) {
        return next({
            log: `error in get name: Error=${err}`,
            message: { err: 'error in get name'}
        });
    } 
}

/*
* Update Functions
*/
// update event
tomatosController.updateEvent = async (req, _res, next) => {
    try {
        const { _id } = req.query;
        const { endTime, additionalTime } = req.body;
        const state = await Event.findOne( { _id } )
        await Event.updateOne({ 
            _id: _id,
            time: state.time[this.time.length - 1].end = endTime,
            additionalTime: additionalTime,
            totalTime: state.duration + this.additionalTime,
        });
        next();
    } catch (err) {
        return next({
            log: `error in update event: Error=${err}`,
            message: { err: 'error in update event'}
        });
    }
};

// update label
tomatosController.updateLabel = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await Label.updateOne({ 
            _id = _id,
            id = this.id.push(await Event.findOne({ _id })),

        });
        next();
    } catch (err) {
        return next({
            log: `error in update label: Error=${err}`,
            message: { err: 'error in update label'}
        });
    }
};

// update name
tomatosController.updateName = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await Name.updateOne({
            _id: id, 
            id = this.id.push(await Event.findOne( { _id } ))
        });
        next();
    } catch (err) {
        return next({
            log: `error in update name: Error=${err}`,
            message: { err: 'error in update name'}
        });
    }
};

/*
* Delete Functions
*/
// delete event
tomatosController.deleteEvent = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await Event.deleteOne({ _id });
        next();
    } catch (err) {
        return next({
            log: `error in delete event: Error=${err}`,
            message: { err: 'error in delete event'}
        });
    } 
}

// delete labbel
tomatosController.deleteLabel = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await Label.deleteOne({ _id });
        next();
    } catch (err) {
        return next({
            log: `error in delete label: Error=${err}`,
            message: { err: 'error in delete label'}
        });
    } 
}

// delete name
tomatosController.deleteName = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await Name.deleteOne({ _id });
        next();
    } catch (err) {
        return next({
            log: `error in delete name: Error=${err}`,
            message: { err: 'error in delete name'}
        });
    } 
}



export default tomatosController;