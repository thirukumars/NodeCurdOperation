const express = require('express');
const mongoose = require('mongoose');
const URL = "mongodb://localhost/CurdOperation";
const NameRouter = require('./router/NameRoute')

const app = express();

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology: true});


const connection = mongoose.connection
connection.on("open",()=>{
    console.log('connected');
})
app.use(express.json())
app.use('/api/',NameRouter)
app.listen("5000",()=>{
    console.log('connected local host');
})