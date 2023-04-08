const express =require("express")
const  router=express.Router()

const {addUser, getUser}=require("../Controller/samplecontroller")
const { addBlog, allBlog, getOneBlog, deleteBlog, editBlog, sortBlogs, getAuthorBlog } = require("../Controller/blogcontroller")
const { addComment, blogComments } = require("../Controller/commentcontroller")

router.post("/user",addUser)//signup
router.post("/login",getUser)
router.post('/addblog',addBlog)
router.get('/allblog',allBlog)
router.get('/blogs/:id',getOneBlog)
router.delete('/deleteblog/:id',deleteBlog)
router.patch('/editblog/:id',editBlog)
router.get('/sortblog/:category',sortBlogs)

router.post('/addcomment',addComment)
router.get('/blogcomments/:id',blogComments)

router.get("/authorblogs/:id",getAuthorBlog)


module.exports=router