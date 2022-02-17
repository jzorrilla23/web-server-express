const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.get('/',  (req, res) =>{
  res.send('Hello World')
})

app.get('/josue/:age', (req, res) => {
    res.send(`<p> Josue Zorrilla ${req.params.age} </p>`)
})

app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/generic', (req, res)=>{
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res)=>{
    res.sendFile(__dirname + '/public/elements.html')
})
app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})



app.listen(port, ()=>{ console.log(`Listen on port ${port}`)})