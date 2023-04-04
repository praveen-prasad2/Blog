const express =require("express")
const  router=express.Router()

const {addUser, getUser}=require("../Controller/samplecontroller")
const { addBlog, allBlog, getOneBlog, deleteBlog } = require("../Controller/blogcontroller")

router.post("/user",addUser)//signup
router.post("/login",getUser)
router.post('/addblog',addBlog)
router.get('/allblog',allBlog)
router.get('/blogs/:id',getOneBlog)
router.delete('/deleteblog/:id',deleteBlog)

module.exports=router