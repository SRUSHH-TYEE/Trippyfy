const mongoose = require('mongoose');

const UserSchema = new Schema({

    username:{
        type: String,
        required: true,
        unique: true,
    },
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ['female','male', 'other'],
        
    },
    birth_date:{
        type: Date,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    contact:{
        type: Number,
        required: true,
        unique: true,
    },
    street:{
        type: String,
        required: true, 
    },
        
    city:{
        type: String,
        required:true,
    },
    state: {
        type: String,
        required: true,
    },
    zip:{
        type: Number,
        required: true,
    },
    organization:{
        type: String,
        required: true,
    },
    department:{
        type:String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    emp_id:{
        type: Number,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profile_photo: {
        type: String,
        required: false,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    blockedUser:{
        type:Array,
        default:[],    
    },
});
module.exports = mongoose.model('user', UserSchema);
