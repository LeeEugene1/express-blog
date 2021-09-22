const express = require('express')
const app = express()

const mongoose = require('mongoose')
// connect to m
mongoose.connect('mongodb+srv://admin:1234@cluster0.feldq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    
})

// set template engine
app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended: false}))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
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