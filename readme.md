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

index.ejs
```javascript
<h1><%=sample %></h1>
```

server.js
```javascript
// set template engine
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {sample: 'dfdfdf'})
})
```

5. static
```app.use('/public', express.static('public'))```
example
```html
<img src="/public/images/59987309.jpeg" class="card-img" alt="...">
```

# post