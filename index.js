const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const path = require('path');
const app = express()


const Posts = require('./posts.js');
const posts = require('./posts.js');

mongoose.connect('mongodb+srv://root:naruto1002@cluster0.2q7nz.mongodb.net/dankicode?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Database conectado com sucesso!');
}).catch((err)=>{
    console.lo(err.message);
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
  
  res.render('home',{});
})

app.post('/admin/cadastro',(req,res)=>{
  console.log(req.body);
  posts.create({
    nome:req.body.nome,
    email:req.body.email,
    mensagem:req.body.mensagem,
})
 res.redirect('/');
})

app.listen(5000,()=>{
    console.log('server rodando')
})