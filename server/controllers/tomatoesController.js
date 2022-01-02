/*
* Controls all database CRUD operations 
* Methods Include:
*   Create / Get / Update / Delete
*   for Events / Labels / Names Collections
*   
* TODO: review update and create methods
*/

const TomatoModel = require('../models/tomatoModel');

const tomatoesController = {};

// create event 
tomatoesController.createEvent = async (req, res, next) => {
    try {
        const {
            id,
            time,
            duration,
            additionalTime,
            labels,
            name
        } = req.body

        const addedEventDoc = await TomatoModel.Event.create({
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
tomatoesController.createLabel = async (req, res, next) => {
    try {
        const {
            name,
            id
        } = req.body

        const addedLabelDoc = await TomatoModel.Event.create({
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
tomatoesController.createName = async (req, res, next) => {
    try {
        const {
            name,
            id
        } = req.body

        const addedNameDoc = await TomatoModel.Event.create({
            name,
            id          
        })
        res.locals.events = addedNameDoc;
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
tomatoesController.getEvents = async (_req, _res, next) => {
    try {
        if (req.body.id) { next() }
        await TomatoModel.Event.findAll( {} );
        next();
    } catch (err) {
        return next({
            log: `error in get events: Error=${err}`,
            message: { err: 'error in get events'}
        });
    } 
}

// get labels
tomatoesController.getLabels = async (_req, _res, next) => {
    try {
        if (req.body.id) { next() }
        await TomatoModel.Label.findAll( {} );
        next();
    } catch (err) {
        return next({
            log: `error in get labels: Error=${err}`,
            message: { err: 'error in get labels'}
        });
    } 
}

// get names
tomatoesController.getNames = async (_req, _res, next) => {
    try {
        if (req.body.id) { next() }
        await TomatoModel.Name.findAll( {} );
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
tomatoesController.getEvent = async (_req, _res, next) => {
    const { _id } = _req.body;
    try {
        await TomatoModel.Event.findOne( { _id } );
        next();
    } catch (err) {
        return next({
            log: `error in get event: Error=${err}`,
            message: { err: 'error in get event'}
        });
    } 
}

// get label
tomatoesController.getLabel = async (_req, _res, next) => {
    const { _id } = _req.body;
    try {
        await TomatoModel.Event.findOne( { _id } );
        next();
    } catch (err) {
        return next({
            log: `error in get label: Error=${err}`,
            message: { err: 'error in get label'}
        });
    } 
}

// get name
tomatoesController.getName = async (_req, _res, next) => {
    const { _id } = _req.body;
    try {
        await TomatoModel.Event.findOne( { _id } );
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
tomatoesController.updateEvent = async (req, _res, next) => {
    try {
        const { _id } = req.query;
        const { endTime, additionalTime } = req.body;
        const state = await TomatoModel.Event.findOne( { _id } )
        await TomatoModel.Event.updateOne({ 
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
tomatoesController.updateLabel = async (req, _res, next) => {
    try {
        const { _id } = req.query;
        // await TomatoModel.Label.updateOne({ 
        //     _id: _id,
        //     id: this.id.push(await Event.findOne({ _id })),

        // });
        next();
    } catch (err) {
        return next({
            log: `error in update label: Error=${err}`,
            message: { err: 'error in update label'}
        });
    }
};

// update name
tomatoesController.updateName = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        // await TomatoModel.Name.updateOne({
        //     _id: id, 
        //     id = this.id.push(await Event.findOne( { _id } ))
        // });
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
tomatoesController.deleteEvent = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await TomatoModel.Event.deleteOne({ _id });
        next();
    } catch (err) {
        return next({
            log: `error in delete event: Error=${err}`,
            message: { err: 'error in delete event'}
        });
    } 
}

// delete label
tomatoesController.deleteLabel = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await TomatoModel.Label.deleteOne({ _id });
        next();
    } catch (err) {
        return next({
            log: `error in delete label: Error=${err}`,
            message: { err: 'error in delete label'}
        });
    } 
}

// delete name
tomatoesController.deleteName = async (req, _res, next) => {
    try {
        const _id = req.query.id;
        await TomatoModel.Name.deleteOne({ _id });
        next();
    } catch (err) {
        return next({
            log: `error in delete name: Error=${err}`,
            message: { err: 'error in delete name'}
        });
    } 
}



module.exports = tomatoesController;