const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request = require('request');
const bodyParser = require('body-parser');

let posts = {
  data: [
  { message: 'hello'},
  { message: 'hi'},
  {message: "good bye"}]
};


router.get('/posts', function(req, res) {
  //res.send('hello world');
  res.json(posts);

});

router.post('/register', function(req, res) {
  //res.json(posts);
  var userData = req.body;
  console.log(userData.email);
  res.sendStatus(200);

});

module.exports = router;
