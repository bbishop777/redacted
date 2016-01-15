var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mess = '';
server.use(bodyParser.urlencoded({extended: true}));


function filterOne(req, res, next) {
  mess = req.body.message;
  mess = mess.replace(/selfie/i, 'self-portrait')
              .replace(/yummers/i, 'delicious')
              .replace(/outchea/i, 'are out here')
              .replace(/bruh/i, 'wow')
              .replace(/doge/i, 'pug')
              .replace(/cilantro/i, 'soap')
              .replace(/bae/i, 'loved one')
              .replace(/swag/i, 'style')
              .replace(/yolo/i, 'carpe diem');
  next();
}

server.post('/message', filterOne, function (req, res) {
  res.status(200).send(mess);

});

server.listen(3000, function () {
console.log('Server started: http:localhost: 3000'); });