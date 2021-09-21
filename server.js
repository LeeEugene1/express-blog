const express = require('express')
const app = express()

// set template engine
app.set('view engine', 'ejs')
const blogRouter = require('./routes/blogs')


app.get('/',(req,res)=>{
    const blogs = [
        {
            title:'t1',
            content:'blabla',
            author:'Jane',
            // createdAt:Date.new(),
            // img:'placeholder.jpg'
        },
        {
            title:'t2',
            content:'blabla',
            author:'Jane',
            // createdAt:Date.new(),
            // img:'placeholder.jpg'
        },
        {
            title:'t3',
            content:'blabla',
            author:'Jane',
            // createdAt:Date.new(),
            // img:'placeholder.jpg'
        }
    ]
    res.render('index', { blogs: blogs})
})

app.use('/blogs',blogRouter)
app.use('/public', express.static('public'))

app.listen(5000)