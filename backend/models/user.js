const { text } = require('express');
const mongoose = require('mongoose');
const{Schema} = mongoose;


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
        required: true,  
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
    address:{
        type: String,
        required: true, 
    },
    organization:{
        type:String,
        enum: ['test_1','test_2', 'test_3'],
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
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    date:{
        type: Date,
        default: Date.now,
    },
    blockedUser:{
        type:Array,
        default:[],    
    },
    resetpassword:{
        type:Boolean,
        default:false,
    },
    latitude:{
        type:Number,
        default:null,
    },
    longitude:{
        type:Number,
        default:null,
    },
    current_latitude:{
        type:Number,
        default:null,
    },
    current_longitude:{
        type:Number,
        default:null,
    },
    is_available:{
        type:Boolean,
        default:false,
    },
    is_auth:{
        type:Boolean,
        default:false,
    },
});
module.exports = mongoose.model('User', UserSchema);
