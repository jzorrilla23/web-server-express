const express = require('express')
const app = express()
const port = 8080

app.get('/',  (req, res) =>{
  res.send('Hello World')
})

app.get('/josue/:age', (req, res) => {
    res.send(`<p> Josue Zorrilla ${req.params.age} </p>`)
})

app.listen(port, ()=>{ console.log(`Listen on port ${port}`)})