const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  jwt = require('jwt-simple');

var User = require('../../models/User.js');
var Post = require('../../models/Post.js');

mongoose.Promise = Promise;

mongoose.connect('mongodb://test:test@ds119476.mlab.com:19476/pssocial',
{ userMongoClient: true },  (err) => {
    if (!err)
      console.log('Conneted to Mongo on Mlab');
  }
);


router.get('/posts/:id', async function(req, res) {
  //res.send('hello world');
  //res.json(posts);
  var author = req.params.id
  var posts = await Post.find({author})
  res.json(posts)

});

router.post('/post', function(req, res) {
  //res.send('hello world');

  var postData = req.body;
  postData.author ='5a165e281f72756304071f41';

  var post = new Post(postData)

  post.save((err,result) => {
    if (err) {
     console.error('Saving post ERROR');
      return res.status(500).send({message: 'saving post error'});
    } else  {
       console.log('Saved post message');
    }

   res.sendStatus(200);

   });
  //res.json(posts);

});

router.get('/users', async (req, res) => {
  //res.send('hello world');
  try {
    var users = await User.find({}, '-pwd -__v');
    res.json(users);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get('/profile/:id', async (req, res) => {
  //console.log(req.params.id);
  //res.send('hello world');

  try {
    var user = await User.findById(req.params.id, '-pwd -__v');
    res.json(user);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }

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

router.post('/login', async (req, res) => {
  //res.json(posts);
  var userData = req.body;
  var user = new User(userData);
  var user = await User.findOne({email: userData.email })
  console.log(`USER DATA:  ${user}`);

  if(!user)
     return res.status(401).send({message: 'Email or Password is invalid'});

   if(userData.pwd != user.pwd)
     return res.status(401).send({message: 'Email or Password is invalid'});

   var payload = {};

   // payload first param
   // secret second param. The secret is used to decrypt and encrypt the token
   //
   var token = jwt.encode(payload,'123');
   console.log(token);


  res.status(200).send({token});

  //console.log(userData.email);
  //res.sendStatus(200);

});

module.exports = router;
