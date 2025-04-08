var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

var server = app.listen(3001, function(){
    console.log('Server is running on port 3001');
});



app.listen(3000);

