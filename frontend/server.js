const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

const psight = require('./server/routes/psight');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));



// API locatoin
app.use('/api', api);


// psight locatoin
app.use('/psight', psight);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
})


const port = process.env.PORT || '3000';
app.set('port', port);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)});
