const express = require('express')
const app = express()
const cors= require('cors')
const port = 5002
const connectdb = require('./config/connectdb')
const contactRoute = require('./route/contactRoutes')

app.use(cors)

connectdb()
//middle affich express
app.use(express.json())
 
app.use('/contact',contactRoute)


app.listen(port,err=>{
    err?console.log(err):console.log(`go to the port => ${port}`)
})