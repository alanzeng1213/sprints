const Post = require("../models/sprints");

exports.getPosts =(req,res, next) =>{
  //  const pageSize = req.query.pageSize;
  const pageSize = +5;
  const currentPage =+req.query.page;
  const postQuery = Post.find();
let fetchPosts ;
if (pageSize && currentPage){
  postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
}
postQuery.then(documents =>{
  fetchPosts = documents;
  //  console.log(data);
   return Post.count();
  }).then(count => {


    count

    res.status(200).json({
      message: 'Post fetched success!!2',
      posts : fetchPosts,
      count : Math.ceil(count/5)*10
    });
  });


}



exports.createPost =(req,res,next) =>{

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
}


exports.deleteSprints = (req,res ,next ) => {

  console.log('delete all data2!!!!');

  Post.deleteMany().then(result => {
   // console.log("!!!!:"+req.params.id);
   //s console.log(result);
    res.status(200).json({message:"All Post deleted!!!"});
  });

  }
