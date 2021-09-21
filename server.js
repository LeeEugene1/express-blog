const express = require('express')
const app = express()

// set template engine
app.set('view engine', 'ejs')

app.get('/',(res,req)=>{
    req.render('index')
})

app.listen(5000)