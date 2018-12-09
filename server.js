
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


var data = [
    {
      "id": 0,
      "title" : "Dar uma volta com a gatinha",
      "deleted" : 0
    },
    {
      "id": 1,
      "title" : "Dar um pedala robinho",
      "deleted" : 0
    }
]

// rota para view
app.get("/", function(req,res){
    res.sendfile('index.html')
});

// rota para funcoes
app.get("/list", function(req,res){
    res.send(data)
});

app.get("/add", function(req,res){
    var title = req.query.title;
    var id = data.length + 1
    var deleted = 0
    var task = {}
    task.id = id
    task.title = title
    task.deleted = deleted
    data.push(task);
    res.send(data)
});

app.get("/remove", function(req,res){
    var id = req.query.id;
    // data = JSON.parse(JSON.stringify(data))
    for (var i = 0; i<data.length; i++){
        if (data[i].id == id){
            data[i].deleted = 1
        }
    }
    res.send(data)
});

app.listen(port)


