const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });
app.post('/hola', function (req, res) {
    res.send('[POST]Saludos desde express');
  });
  app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
  });