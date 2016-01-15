var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mess = '';
server.use(bodyParser.urlencoded({extended: true}));

//middleware function that searches string and replaces particular words
//with new ones
function filterOne(req, res, next) {
  mess = req.body.message;
  mess = mess.replace(/selfie/gi, 'self-portrait')
              .replace(/yummers/gi, 'delicious')
              .replace(/outchea/gi, 'are out here')
              .replace(/bruh/gi, 'wow')
              .replace(/doge/gi, 'pug')
              .replace(/cilantro/gi, 'soap')
              .replace(/bae/gi, 'loved one')
              .replace(/swag/gi, 'style')
              .replace(/yolo/gi, 'carpe diem');
  next();
}
//This gets called when post with route 'message' is called.  'filterone' is the
//middleware function that is called before the post callback function is ran
server.post('/message', filterOne, function (req, res) {
  res.status(200).send(mess);

});

server.listen(3000, function () {
console.log('Server started: http:localhost: 3000'); });