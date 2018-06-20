
const experss = require('express');

const bodyParser = require('body-parser');

const Post = require('./models/post');

const mongoose = require('mongoose');

const app =experss();

app.use(experss.static ('assets'));


mongoose.connect("mongodb://localhost:27017/test").then( () => {
    console.log('Connect to database success!!!');
}).catch( () => {
  console.log('connnecting failed...');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin' , '*');
  res.setHeader('Access-Control-Allow-Headers' , 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods' , 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});


app.post("/api/posts" ,(req,res,next) =>{

    // const post =req.body;
    const post =new Post({

      length: req.body.length,
      status: req.body.status,
      data: req.body.data,
      start: req.body.start,
      finish: req.body.finish,
      description: req.body.description

    });

    post.save();

    res.status(201).json({
      message:'Post added successfully222'

    });
});


app.delete('/api/posts/:id', (req,res ,next ) => {



Post.deleteOne({_id: req.params.id }).then(result => {
 // console.log("!!!!:"+req.params.id);
 //s console.log(result);
  res.status(200).json({message:"Post deleted!!!"});
});



});



app.get('/api/posts',(req,res, next) =>{  // zhongjian jie

    Post.find().then(data =>{
    //  console.log(data);
     res.status(200).json({
      message: 'Post fetched success!!2',
      posts : data
    });
    });


});

module.exports = app;
