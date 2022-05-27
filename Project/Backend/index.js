//This is my entry point
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

//we have to use the middleware
app.use(cors())
app.use(express.json())


//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, ()=>{
    console.log(`iNotebook backend listening at http://localhost:{port}`)
})