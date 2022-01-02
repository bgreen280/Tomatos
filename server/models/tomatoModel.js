/*
* DB hosted on MongoDB Free Tier
* Exported as model Names below
* Three Models Below: 
*   Event { id, time, duration, additionalTime, totalTime, labals, name }  
*   Label { name, id }
*   Name { name, id }
*/
// import { connect, Schema as _Schema, model } from 'mongoose';
const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://bgreen:bgreen@cluster0.bzlm9.mongodb.net/tomatos?retryWrites=true&w=majority';

// const MONGO_URI = 'mongodb://tomatoes';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'tomatoes'
    })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connect to Database'));


const Schema = mongoose.Schema;

// sets a schema for the 'event' collection
const eventSchema = new Schema({
    id: Number,
    time: [{ 
        type: String, 
        startTime: Date, 
        endTime: Date 
    }], // { type: String, start: Date, end: Date }
    duration: Number,
    additionalTime: Number,
    totalTime: Number,
    labels: {
        type: Schema.Types.ObjectId,
        ref: 'label'
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'name'
    }
});

// create a model for the 'event' collection that will be part of the export
const Event = mongoose.model('event', eventSchema);

// creates a schema for 'label' and uses it to create the model for it below
const labelSchema = new Schema({
    events: [{ 
        name: String, 
        id: { 
            type: Schema.Types.ObjectId, 
            ref: 'events' 
        } 
    }]
});

const Label = mongoose.model('label', labelSchema);

// creates a schema for 'name' and uses it to create the model for it below
const nameSchema = new Schema({
    events: [{ 
        name: String, 
        id: { 
            type: Schema.Types.ObjectId, 
            ref: 'events' 
        } 
    }]
});


const Name = mongoose.model('name', nameSchema);

// exports all the models in an object to be used in the controller
module.exports = {
    Event: Event,
    Label: Label,
    Name: Name
};
