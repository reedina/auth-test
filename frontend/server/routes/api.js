const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const request = require('request');



// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};


const options = {
  url: 'http://localhost:8000/',
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'Host': 'basic-user'
  }
};


router.get('/users', function(req, res) {

   request(options, function(err1, res1, body1) {

      let obj = JSON.parse(body1);

     res.json(obj);

   });


});



module.exports = router;
