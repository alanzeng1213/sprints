
const experss = require('express');
const bodyParser = require('body-parser');

const postsRoutes = require("./routes/sprints");

const mongoose = require('mongoose');
const session = require('express-session');

var LocalStorage = require('node-localstorage').LocalStorage;
const app =experss();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*30 },
  rolling: true
}))

app.use(function(req,res,next){
// console.log(req.url);
next();
});

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

app.use("/api/posts",postsRoutes);




















module.exports = app;
