const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname:{
    type: String,
    required: true
  },
  dateofbirth: {
    type: String,
    trim:true,

  },
  age: {
    type: Number,
    required: true
  },
  date : {
     type : Date,
      default: Date.now 
    }

});

const User = mongoose.model("user", UserSchema);
module.exports =User
