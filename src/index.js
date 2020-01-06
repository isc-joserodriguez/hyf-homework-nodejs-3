const express = require('express');
const app = express();

app.get('/',function(req,res){
	res.send('Hello World!');
});

app.get('/users',(request,response)=>{
    response.send([]);
});

app.get('/users/:id',(request,response)=>{
    response.send({id:request.params.id});
});

app.post('/user/',(request,response)=>{
    response.send({id:request.body.id});
});

app.listen(3000,function(){console.log('server is listening')})