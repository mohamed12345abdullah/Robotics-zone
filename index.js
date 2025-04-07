const express=require('express')
const path=require('path')

require('dotenv').config()

const mongoose=require('mongoose') 

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on('error', (err) => {
    console.log(err)
})
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})

 
const app=express()
const cors=require('cors')

// cors
app.use(cors())


// parsing
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',express.static(path.join(__dirname, 'public')))



  
// Routers
app.use('/api/subject',require('./routers/subjectRouter'))
app.use('/api/user',require('./routers/user'))



app.listen(3000, () => {
    console.log(`server run and listen to port: http://localhost:3000`);
})