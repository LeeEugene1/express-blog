//blog routes

const express = require('express')
const router = express.Router()


router.get('/blogs',(req,res)=>{
    res.send('hi')
})


module.exports = router