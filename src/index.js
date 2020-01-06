const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var users=[]

app.use(bodyParser.json())

app.get('/',function(req,res){
	res.send('Hello World!');
});

app.get('/users',(request,response)=>{
    response.send(users);
});

app.get('/user/:id',(request,response)=>{
    response.send({"id":request.params.id});
});

app.post('/user/',(request,response)=>{
    users.push({"id":request.body.id})
    response.send({"id":request.body.id});
});

app.listen(3000,function(){console.log('server is listening')})