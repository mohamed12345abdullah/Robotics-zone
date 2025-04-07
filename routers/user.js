const express=require('express')
const userController=require('../controllers/userController')

const Router=express.Router()

Router.route('/subscripe').post(userController.subscripe)

module.exports=Router