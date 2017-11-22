const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request = require('request');


router.get('/posts', function(req, res) {
  res.send('hello world');
});


module.exports = router;
