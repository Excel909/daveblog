import mongoose from "mongoose";

const comment = new mongoose.Schema({
    name:{
        type:String
    },

    comment:{
        type:String
    },

    postId:{
        type:String,
        ref:'Post'
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});


const Comment = mongoose.models.Comment || mongoose.model('Comment',comment);

export default Comment;