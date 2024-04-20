
const mysql=require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'harshal',
    password: 'harshal',
    port: 3306,
    database: 'pune',
    connectionLimit: 10,
  })

  module.exports={
    pool
  }