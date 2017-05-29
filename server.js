var express = require('express');
var app = express();

// middleware

app.use('/', express.static('public'))

var port = process.env.PORT || 2000;

// app.get('*' , function(req , res){
// 	res.send("<h1>Helllo nodejs </h1>");
// });

app.listen(port , function(err){
	if(err){
		console.log(err);
	}else {
		console.log('App is running on post Number' +  " " + port);
	}
});