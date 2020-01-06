const express = require('express');
const app = express();

app.get('/',function(req,res){
	res.send('Hello World!');
});

app.get('/users',(request,response)=>{
    response.send([]);
});

app.listen(3000,function(){console.log('server is listening')})