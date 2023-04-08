const mongoose =require ('mongoose')

const blogSchema=new mongoose.Schema({
    title:{type:String,maxLength:50},
    content:{type:String},
    authorid:{type:String,maxLength:100},
    authorname:{type:String,maxLength:50},
    dateposted:{type:String,maxLength:50},
    category:{type:String,required:true}
})

const BlogModel=mongoose.model('blog',blogSchema)

module.exports=BlogModel