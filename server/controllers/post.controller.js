const asyncHandler = require('express-async-handler');

const Post = require('../models/post.model');

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().sort('-date')
    res.status(200).json(posts)
  });

const createPost = asyncHandler(async(req,res)=>{

  if(!req.body.title || !req.body.description || !req.body.category){
    res.status(400)
    throw new Error('Συμπληρώστε τα απαιτούμενα πεδία');
  }

  const newPost = await Post.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  })

  res.status(200).json(newPost)
});

module.exports = { getPosts, createPost }