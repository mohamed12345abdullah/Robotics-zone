const express=require('express')
const Router=express.Router()
const subjectControler=require('../controllers/subjectContoller')





Router.get('/getAllSubjects',subjectControler.getAllSubjects)
Router.post('/addSubject',subjectControler.addSubject)
Router.put('/editSubject',subjectControler.editSubject)
Router.delete('/deleteSubject',subjectControler.deleteSubject)



module.exports=Router
