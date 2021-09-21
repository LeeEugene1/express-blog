//blog routes

const express = require('express')
const { request } = require('http')
const Blog = require('./../models/blog')
const router = express.Router()


router.get('/new',(req,res)=>{
    res.render('new')
})

router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})

//handle new post
router.post('/', async(req, res)=>{
    // console.log(req.body)//[Object: null prototype] { title: 'test', author: 'yu', desc: 'dddd' }
    let blog = new Blog({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    })

    try{
        blog = await blog.save()
        // console.log(blog.id)
        res.redirect(`blogs/${blog.id}`)
    }catch(err){
        console.log(err)
    }
})


module.exports = router