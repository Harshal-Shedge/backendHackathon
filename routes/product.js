const express = require('express')
const db=require('../db')
const utils=require('../utils')
const router = express.Router() 

router.get('/',(request,response)=>{
    const statement=`select * from product;`
    db.pool.query(statement, (error, products) => {
        if(error){
            response.send(utils.createErrorResult(error))
        }else{
            response.send(utils.createSuccessResult(products))
        }
      })
})

module.exports=router