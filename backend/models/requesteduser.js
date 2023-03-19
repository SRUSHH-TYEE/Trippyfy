const mongoose = require('mongoose');
const{Schema} = mongoose;

const RequestedUserSchema = new Schema({
    id_proof:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        required: true,
        unique: true,
    },
    organization:{
        type: String,
        required: true,
    },
    is_accepted: {
        type: Boolean,
        default:false,
    },
    });
    module.exports = mongoose.model('requesteduser', RequestedUserSchema);