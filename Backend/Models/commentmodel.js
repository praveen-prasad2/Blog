const mongoose=require('mongoose')



const commentSchema=new mongoose.Schema({
    commentorname:{type:String,maxLength:50,required:true},
    comment:{type:String,maxLength:5000,required:true},
    commentorid:{type:String,required:true},
    dateposted:{type:String,required:true},
    blogid:{type:String,required:true}

})

const CommentModel=mongoose.model('comment',commentSchema)

module.exports=CommentModel