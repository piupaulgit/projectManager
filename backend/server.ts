const express = require('express')
const app = express()
const users = require('./routes/user')
app.get('/', users)
// port
const port = process.env.PORT || 5000;



// starting server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);