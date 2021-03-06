const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title :{
        type: String,
        required : true,
        unique: true,
    },
    content : {
        type: String,
        required:true,
        unique: true
    },
    username : {
        type: String,
        required:true,
        unique: true
    },
    categories : {
        type: Array,
        required:false,        
    },


  },
  {timestamps:true}

);

module.exports = mongoose.model("Post", PostSchema);
