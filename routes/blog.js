const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router() 

router.post('/add',(request,response)=>{
    const { id,title,contents,user_id,category_id} = request.body
    const statement=`insert into blogs (id,title,contents,user_id,category_id) values(?,?,?,?,?)`
    db.pool.execute(statement, [id,title,contents,user_id,category_id], (error, blogs) => {
        if(error){
          response.send(utils.createErrorResult(error))
      }else{
          response.send(utils.createSuccessResult(categories))
      }
      })
})
