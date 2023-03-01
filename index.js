require('dotenv').config()
const express =require("express")
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const displayRoutes = require('express-routemap');
const app =express()
const port =process.env.APP_PORT


app.use(bodyParser.json())


displayRoutes(app)




app.listen(port, ()=>{
    // console.log(`Hello, I'm listening on port ${port}`)
})