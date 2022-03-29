//This is my entry point
const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 3000

//we have to use the middleware
app.use(express.json())


//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})