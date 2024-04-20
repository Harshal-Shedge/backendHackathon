const express = require('express')
const cors = require('cors')

const app = express()

// add the cors policy
app.use(cors())

app.use(express.json())

// add routes
const categoryRouter = require('./routes/category')
const propertyRouter = require('./routes/property')

app.use('/category', categoryRouter)
app.use('/property', propertyRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
