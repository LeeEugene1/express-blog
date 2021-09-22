//blog routes

const express = require('express')
const { request } = require('http')
const Blog = require('./../models/blog')
const router = express.Router()


router.get('/new',(req,res)=>{
    res.render('new')
})

//게시글보기
router.get('/:id',async(req,res)=>{
    // res.send(req.params.id)
    let blog = await Blog.findById(req.params.id)
    if(blog){
        res.render('show',{blog: blog})
    }else{
        res.redirect('/')
    }
})

//게시글쓰기
router.post('/', async(req, res)=>{
    // console.log(req.body)//[Object: null prototype] { title: 'test', author: 'yu', desc: 'dddd' }
    let blog = new Blog({
        title:req.body.title,
        author:req.body.author,
        description:req.body.desc
    })

    try{
        blog = await blog.save()
        // console.log(blog.id)
        res.redirect(`blogs/${blog.id}`)
        // res.redirect(`/${blog.id}`)
    }catch(err){
        console.log(err)
    }
})


module.exports = router