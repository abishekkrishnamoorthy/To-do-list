const express= require('express')
const app=express()
const path=require('path')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join('./data')))
app.use('/',require('./routes/data.js'))
app.listen("3010",console.log("running"))