
const Subject=require(  '../models/subjectModel')


const asyncWrapper=require("../middlewares/asyncWrapper")
const createError=require('../utils/createError')
const httpStatusText=require('../utils/httpStatusText')

const addSubject=asyncWrapper(async (req,res)=>{
    const{subjectName}=req.body
    const subject = await Subject.create({name:subjectName});

    if(!subject)
    {
        throw createError(400,httpStatusText.FAIL,"subject not created")
    }
    
    res.status(201).json(subject);
})


const getAllSubjects=asyncWrapper(async (req,res)=>{
    const subjects = await Subject.find({});
    
    res.status(200).json(subjects);
})

const editSubject=asyncWrapper(async (req,res)=>{
    const { subjectId, subjectName } = req.body;
    const subject = await Subject.findByIdAndUpdate(subjectId, );

    if (!subject) {
        throw createError(404, httpStatusText.FAIL, "Subject not found");
    }

    subject.name = subjectName;
    await subject.save();
    res.status(200).json(subject);
})

const deleteSubject=asyncWrapper(async (req,res)=>{
    const { subjectId } = req.body;
    const subject = await Subject.findByIdAndDelete(subjectId);

    if (!subject) {
        throw createError(404, httpStatusText.FAIL, "Subject not found");
    }

    res.status(200).json(subject);
})




module.exports={
    addSubject,
    editSubject,
    deleteSubject,
    getAllSubjects
}