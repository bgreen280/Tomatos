import { connect, Schema as _Schema, model } from 'mongoose';

const MONGO_URI = 'mongodb+srv://bgreen:bgreen@cluster0.bzlm9.mongodb.net/tomatos?retryWrites=true&w=majority';

connect(MONGO_URI, {
  // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'tomatos'
    })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = _Schema;

// sets a schema for the 'event' collection
const eventSchema = new Schema({
    id: Number,
    time: [{ 
        type: String, 
        start: Date, 
        end: Date 
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

// creats a model for the 'event' collection that will be part of the export
const Event = model('event', eventSchema);

// creates a schema for 'label' and uses it to create the model for it below
const labelSchema = new Schema({
    events: [{ 
        totalEventNames: Number, 
        useCount: Number, 
        name: String, 
        id: { 
            type: Schema.Types.ObjectId, 
            ref: 'events' 
        } 
    }]
});

const Label = model('label', labelSchema);

// creates a schema for 'name' and uses it to create the model for it below
const nameSchema = new Schema({
    events: [{ 
        totalEventNames: Number, 
        useCount: Number, 
        name: String, 
        id: { 
            type: Schema.Types.ObjectId, 
            ref: 'events' 
        } 
    }]
});


const Name = model('name', nameSchema);

// exports all the models in an object to be used in the controller
export default {
    Event,
    Label,
    Name
};
