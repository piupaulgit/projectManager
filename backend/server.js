const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const bodyParser =  require('body-parser');
const cookieParse = require('cookie-parser')
const cors = require('cors')
const app = express()
const userRoutes = require('./routes/user')

app.use(bodyParser.json())
app.use(cookieParse())
app.use(cors())

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}).then(() =>{
  console.log('DB connected')
}).catch((err) => {
  console.log('err')
})

// All Routes
app.use('/api', userRoutes)

app.get('/', (req,res) => {
  console.log('this is working')
})

// port
const port = process.env.PORT || 5000;



// starting server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);