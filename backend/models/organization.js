const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrganizationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true,
    },
    contact: {
        type: Number,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        default: null,
    },
    longitude: {
        type: Number,
        default: null,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    
});
module.exports = mongoose.model('Organization', OrganizationSchema);