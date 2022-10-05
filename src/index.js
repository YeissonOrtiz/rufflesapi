const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const PORT = 3000 || process.env.PORT

const jsonParser = bodyParser.json()

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(req.params)
});

app.get('/:id', function (req, res) {
  res.send('get recibido');
  console.log(req.params)
});

app.post('/post', jsonParser, function (req, res) {
  console.log(req.body)
  res.send("post recibido")
});

app.listen(PORT, function () {
  console.log(`Running at ${PORT}`);
});