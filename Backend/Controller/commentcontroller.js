const CommentModel=require("../Models/commentmodel")

const addComment=async(req,res)=>{
    try{
        let comment=await CommentModel.create(req.body)
        res.json({
            success:true,
            message:"Commented Successfully",
           comment
        })
    }catch(error){
        res.json({
            success:false,
            message:"Sorry can't add your comment"
        })
        console.log(error);
    }
}

const blogComments=async(req,res)=>{
    try{
            let blogcomments=await CommentModel.find({blogid:req.params.id})
            res.json({
                success:true,
                message:"got your comments",
                blogcomments
            })
    }catch(error){
        res.json({
            success:false,
            message:"sorry can't get your comments"
        })
    }
}


module.exports={addComment,blogComments}