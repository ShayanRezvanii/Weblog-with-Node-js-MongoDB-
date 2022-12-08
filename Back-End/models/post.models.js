const mongoose = require('mongoose');
// const { post } = require('../router/postsRoutes');


const postSchema = mongoose.Schema({
    title : {type : String , required: true} ,
    content : {type : String , required: true} ,
})



const Post = mongoose.model('Post' , postSchema);

module.exports = Post;