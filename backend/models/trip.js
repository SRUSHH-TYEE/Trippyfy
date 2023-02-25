const mongoose = require('mongoose');

const TripSchema = new Schema({
    shared_with:{
        type:Array,
        require:false,
    },
    source_place:{
        type:String,
        defalt:NaN,
    },
    destination_place:{
        type:String,
        default:NaN,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});