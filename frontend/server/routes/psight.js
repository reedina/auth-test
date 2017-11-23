const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var User = require('../../models/User.js');

mongoose.connect('mongodb://test:test@ds119476.mlab.com:19476/pssocial',
{ userMongoClient: true },  (err) => {
    if (!err)
      console.log('Conneted to Mongo on Mlab');
  }
);


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
  var user = new User(userData);
  user.save((err,result) => {
   if (err)
    console.log('Saving user ERROR');
    else
      console.log('Saved data');

  res.sendStatus(200);

  });
  console.log(userData.email);
  //res.sendStatus(200);

});

module.exports = router;
