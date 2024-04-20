const express = require('express')
const db=require('../db')
const utils=require('../utils')
const router = express.Router() 

router.post('/register',(request,response)=>{
    const {full_name,email,password,phone_no}=request.body
    const statement=`insert into projectuser (full_name,email,password,phone_no) values(?,?,?,?);`
    db.pool.execute(statement,[full_name,email,password,phone_no],(error,result)=>{
        if(error){
            response.send(utils.createErrorResult(error))
        }else{
            response.send(utils.createSuccessResult(result))
        }
    })

})

router.get('/login',(request,response)=>{
    const {email,password}=request.body
    const statement1=`select full_name from projectuser where email=? and password=?`
    db.pool.execute(statement1,[email,password],(error,result)=>{
        if(error){
            response.send(utils.createErrorResult(error))
        }else{
            response.send(utils.createSuccessResult(result))
        }
    })

})

module.exports=router