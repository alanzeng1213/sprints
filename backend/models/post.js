
const mongoose =require('mongoose');

const postSchema = mongoose.Schema({

  length: { type: String , require:true},
  status: { type: String , require:true},
  data: { type: String , require:true},
  start: { type: String , require:true},
  finish: { type: String , require:true},
  description: { type: String , require:true}

});


module.exports = mongoose.model('sprints' , postSchema);
