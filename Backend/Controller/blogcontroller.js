const BlogModel = require("../Models/blogmodel")




const addBlog=async(req,res)=>{
    try{
        let data=await BlogModel.create(req.body)
        res.json({
            success:true,
            message:"Blog added Successfully",
            data
        })
    }catch(error){
        res.json({
            success:false,
            message:"Task adding unsuccessful"
        })
        console.log(error);
    }
}


const allBlog=async(req,res)=>{
    try{
        let allBlog=await BlogModel.find(req.body)
        res.json({
            success:true,
            message:"Got all Blogs",
            allBlog
        })
    }catch(error){
        res.json({
            success:false,
            message:"it's an error"
        })
    }
}

const getOneBlog = async (req,res)=>{
    try{
        let blogs=await BlogModel.find({authorid:req.params.id})
        res.json({
            success:true,
            message:"got your blog",
            blogs
        })
    }catch(error){
        res.json({
            success:false,
            message:"sorry it's an error"
        })
    }
}
const deleteBlog=async(req,res)=>{
    let delBlog=await BlogModel.findOneAndDelete({_id:req.params.id})
    try{
        res.json({
            success:true,
            message:"deleted successfully"
        })
    }catch(error){
        res.json({
            success: false,
            message: "delete unsuccessful"
        })
    }
}



module.exports={addBlog,allBlog,getOneBlog,deleteBlog}