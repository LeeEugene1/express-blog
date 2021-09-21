# setting

1. npm package
```npm init```

2. dependency
- node_modules
- express
- mongoose
- ejs
```npm i express mongoose ejs```

3. nodemon test
```npm i --save-dev nodemon```
package.json
```javascript
  "scripts": {
    "server": "nodemon server.js"
  },
```
server.js
```javascript
const express = require('express')
const app = express()

app.get('/',(res,req)=>{
    req.send('hi')
    req.end()
})

app.listen(5000)
```

4. ejs test
- make file : [views]-index.ejs
server.js
```javascript
// set template engine
app.set('view engine', 'ejs')

app.get('/',(res,req)=>{
    req.render('index')
})
```