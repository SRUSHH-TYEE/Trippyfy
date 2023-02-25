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
        type: string,
        enum: ['female','male', 'other'],
        
    },
    birth_date:{
        type: Date,
        required: true,
    },
    email:{
        type:string,
        required: true,
        unique: true,
    },
    contact:{
        type: number,
        required: true,
        unique: true,
    },
    street:{
        type: string,
        required: true, 
    },
        
    city:{
        type: string,
        required:true,
    },
    state: {
        type: string,
        required: true,
    },
    zip:{
        type: number,
        required: true,
    },
    organization:{
        type: string,
        required: true,
    },
    department:{
        type:string,
        required: true,
    },
    role:{
        type: string,
        required: true,
    },
    emp_id:{
        type: number,
        required: true,
        unique: true,
    },
    password:{
        type: string,
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
