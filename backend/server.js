var express = require('express');

var app = express();


let response = {
    status: 200,
    data: [],
    message: null
  };

const port = process.env.PORT || '3100';
app.set('port', port);

app.get('/users', (req, res) => {
   response.data = [{"name": "Sergio"}, {"name": "Gabriel"}, {"name": "Ederson"}]
   res.json(response);
});


app.listen(port, () => { 
    console.log(`Server running on port: ${port}`)
});