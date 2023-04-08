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
            message:"Blog adding unsuccessful"
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
        let blog=await BlogModel.findOne({_id:req.params.id})
        res.json({
            success:true,
            message:"got your blog",
            blog 
        })
    }catch(error){
        res.json({
            success:false,
            message:"sorry it's an error"
        })

        console.log(error);
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

const editBlog=async(req,res)=>{
    let edit=await BlogModel.findOneAndUpdate({_id:req.params.id})
    try{
        res.json({
            success:true,
            message:"edited successfully"
        })
    }catch(error){
        res.json({
            success:false,
            message:"failed to edit"
        })
    }
}

const sortBlogs=async(req,res)=>{
    let sort=await BlogModel.find({category:req.params.category})
    try {
        res.json({
            success:true,
            message:"successfully sorted",
            sort
        })
        console.log(sort);
    } catch (error) {
        res.json({
            success:false,
            message:"sorry can't sort "
        })
    }
}


const getAuthorBlog=async (req,res)=>{
    try{
        let authorblog=await BlogModel.find({authorid:req.params.id})
        res.json({
            success:true,
            message:"got all your blogs",
            authorblog
        })
    }catch(error){
        res.json({
            success:false,
            message:"sorry it's an error"
        })
    }
}

module.exports={addBlog,allBlog,getOneBlog,deleteBlog,editBlog,sortBlogs,getAuthorBlog}