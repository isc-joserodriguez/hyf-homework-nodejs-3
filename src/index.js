const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var users = []

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/users', (request, response) => {
    response.send(users);
});

app.get('/user/:id', (request, response) => {
    response.send({ id: 0 });
});

app.post('/user/', (request, response) => {
    users.push({ id: 0 })
    response.send({ id: 0 });
});


app.delete('/user/:id', (request, response) => {
    let count = users.length;
    users = users.filter(user => user.id != request.params.id);
    response.status((count == users.length || count == 0) ? 204 : 202);
    response.send({ id: 0 });
});

app.listen(3000, function () { console.log('server is listening') })