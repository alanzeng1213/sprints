const express = require("express");
const Post = require('../models/sprints');
 const PostController = require("../controllers/sprints");


const router = express.Router();

router.post('' , PostController.createPost);

router.delete('', PostController.deleteSprints);

router.get('', PostController.getPosts);


module.exports = router;
