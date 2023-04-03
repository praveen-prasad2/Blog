const express =require("express")
const  router=express.Router()

const {addUser, getUser}=require("../Controller/samplecontroller")

router.post("/user",addUser)//signup
router.post("/login",getUser)

module.exports=router