

const User=require('../models/userModel')
const asyncWrapper=require("../middlewares/asyncWrapper")
const createError=require('../utils/createError')
const httpStatusText=require('../utils/httpStatusText')



const subscripe=asyncWrapper(async (req,res)=>{
    const {email}=req.body
    const user=new User({email})

    await user.save()
    res.status(201).json({message:"user created successfully"})
})



module.exports={
    subscripe
}