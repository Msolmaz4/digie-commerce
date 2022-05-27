const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        minlength: [ 10,'email must be longer than 10'],
        match : /.+\@.+\..+/
    },
    name:{
        type: String,
        required:true,
        minlength:[2, 'name must be langer than 2']
    },
    surname:{
        type: String,
        required:true,
        minlength:[2, 'name must be langer than 2']
    },
    password:{
        type:String;
        required:true,

    },
    favs:{
        type:Array,
        default:[]
    }
})

const Users = mongoose.model('User',userSchema)
module.exports = Users