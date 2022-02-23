import mongoose from "mongoose"

const express = require('express')
const app = express()
const users = require('./routes/user')
mongoose.connect(process.env.DATABASE)
app.get('/', users)
// port
const port = process.env.PORT || 5000;



// starting server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);