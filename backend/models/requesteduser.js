const mongoose = require('mongoose');

const RequestedUserSchema = new Schema({
    id_proof:{
        type: string,
        required: true,
    },
    username:{
        type:string,
        required: true,
        unique: true,
    },
    organization:{
        type: string,
        required: true,
    },
    is_accepted: {
        type: Boolean,
        default:false,
    },
    });
    module.exports = mongoose.model('requesteduser', RequestedUserSchema);