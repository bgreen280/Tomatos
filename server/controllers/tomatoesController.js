const {Event, Label, Name} = require('../models/tomatoModel');

const tomatosController = {};
/*
* Create Functions
*/

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
            totalEvenetNames,
            useCount,
            name,
            id
        } = req.body

        const addedLabelDoc = await Event.create({
            totalEvenetLabels,
            useCount,
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
            totalEvenetNames,
            useCount,
            name,
            id
        } = req.body

        const addednameDoc = await Event.create({
            totalEvenetNames,
            useCount,
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

// get labels

// get name


/*
* Update Functions
*/

// update event
tomatosController.updateEventTime = async (req, res, next) => {
    try {
        const { _id } = req.query;
        const { endTime, additionalTime } = req.body;
        await Event.updateOne({ 
            _id: _id,
            time: this.time[this.time.length - 1].end = endTime,
            additionalTime: additionalTime,
            totalTime: this.duration + this.additionalTime,
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
tomatosController.updateLabel = async (req, res, next) => {
    try {
        const _id = req.query.id;
        await Label.updateOne({ 
            _id = _id,
            totalEvenetLabels: this.totalEvenetLabels + 1,
            id = this.id.push(await Events.findOne({ _id })),

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
tomatosController.updateName = async (req, res, next) => {
    try {
        const _id = req.query.id;
        await Name.updateOne({
            _id: id, 
            totalEvenetNames: this.totalEvenetNames + 1,
            id = this.id.push(await Events.findOne( {_id} ))
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

// delete labbel

// delete name




module.exports = tomatosController;