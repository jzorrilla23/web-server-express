const express = require('express');
var hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine','hbs')

app.use(express.static('public'))
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// app.get('/', (req, res)=>{
//     res.render('home', {nombre:'Josue', apellido:'Zorrilla'})
// })

// app.get('/',  (req, res) =>{
//   res.send('Hello Worldxxxx')
// })

// app.get('/josue/:age', (req, res) => {
//     res.send(`<p> Josue Zorrilla ${req.params.age} </p>`)
// })

// app.get('/generic', (req, res)=>{
//     res.render('generic')
// })

// app.get('/elements', (req, res)=>{
//     res.render('elements')
// })

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})



app.listen(port, ()=>{ console.log(`Listen on port http://localhost:${port}`)})