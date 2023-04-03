const SampleModel =require("../Models/samplemodel")
const bcrypt = require('bcrypt')

const addUser=async (req,res)=>{
    try {
        req.body.password=await bcrypt.hash(req.body.password,10)
let data=await SampleModel.create(req.body)

res.json({
    success:true,
    message:"User Registration successful"
})
console.log(req.body);
    } catch (error) {
        res.json({
            success:false,
            message:"Try again"
        })
        
    }
}

//Login

const getUser=async(req,res)=>{
    try {
        let user =await SampleModel.findOne({email:req.body.email})
        if(user){
            const existUser=await bcrypt.compare(req.body.password, user.password)
            if(existUser){

                res.json({
                    success:true,
                    message:"success"
                })
            }else{
                res.json({
                    success:false,
                    message:"check Password"
                })
            }
        }
        else{
            res.json({
                success:false,
                message:"wrong password"})
        }
    } catch (error) {
        res.json({
            success:false,
            message:"unsuccessful"
        })
    }
}

module.exports={addUser,getUser}