
const mongoose =require('mongoose');

const postSchema = mongoose.Schema({

  length: { type: String , required:true},
  status: { type: String , required:true},
  data: { type: String , required:true},
  start: { type: String , required:true},
  finish: { type: String , required:true},
  description: { type: String , required:true}

});


module.exports = mongoose.model('sprints' , postSchema);
