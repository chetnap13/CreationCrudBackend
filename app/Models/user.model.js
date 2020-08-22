const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    DOB:Date

},{
    timestamps:true
})

module.exports = mongoose.model('user',UserSchema);