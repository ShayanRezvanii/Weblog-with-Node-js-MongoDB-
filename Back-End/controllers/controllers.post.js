const Post = require('../models/post.models');
const postsRoutes = require('../router/postsRoutes')
const mongoose = require('mongoose')


const createPost = async (req , res , next) => {
    const {title , content} = req.body;
    
    const createPost = new Post ({title , content});
    await createPost.save()

    res.status(201).json({createPost})
}

const allData =  async (req , res , next) => {
    const posts = await Post.find()
    
    res.json({posts})
 
}


exports.createPost = createPost
exports.allData = allData
