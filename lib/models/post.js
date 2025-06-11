import mongoose from "mongoose";

const post = new mongoose.Schema({

    category:{
        type:String
    },

    title:{
        type:String
    },

    author:{
        type:String
    },

    content:{
        type:String
    },

    postPic:{
        type:String
    },

    videoSrc:{
        type:String
    },

    views:{
        type:Number,
        default:0
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});


const Post = mongoose.models.Post || mongoose.model('Post',post);

export default Post;

