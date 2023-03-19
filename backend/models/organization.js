const mongoose = require('mongoose');
const{Schema} = mongoose;
const OrganizationSchema = new Schema({
    mainauthority:{
        type:String,
        required:true,
    },
    emp_id:{
        type: number,
        required: true,
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
});
module.exports = mongoose.model('organization', OrganizationSchema);