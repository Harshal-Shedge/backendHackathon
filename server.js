const express=require('express')
const cors=require('cors')
const db=require('./db')
const utils = require('./utils')

const app=express()
app.use(cors())
app.use(express.json())


const registerrouter=require('./routes/user')
const categoryRouter = require('./routes/category')
app.use('/user',registerrouter)
app.use('/category', categoryRouter)


app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
  })

