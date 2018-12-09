
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// rota para view
app.get("/", function(req,res){
    res.sendfile('index.html')
});

// rota para funcoes
app.get("/list", function(req,res){
    res.sendfile('data.json')
});

app.get("/add", function(req,res){
    console.log('aqui')
    res.send("add")
});


app.listen(port)


