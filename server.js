const express = require('express')
const app = express()
const blogRouter = require('./routes/blogs')

// set template engine
app.set('view engine', 'ejs')

app.get('/',(res,req)=>{
    req.render('index')
})

app.use('/blogs',blogRouter)

app.listen(5000)