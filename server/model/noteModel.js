const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : 'pending'
    },
    date : {
        type : Date,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    createdAt : {
        type : Date,
        default : () => Date.now()
    },
    updatedAt : {
        type : Date,
        default : () => Date.now()
    }
})

exports.noteModel = mongoose.model('notes',noteSchema);