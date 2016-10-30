var express = require('express');
var app = express();
var mongojs = require('mongojs');  
var db = mongojs('usecases', ['cases']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
 
app.get('/usecases', function(req, res){
	db.cases.find(function(error, docs){
		res.json(docs);
	});
});

app.post('/usecases', function(req, res){
	db.cases.insert(req.body, function(err, doc){
		res.json(doc);
	})
});


app.listen(3000);
console.log("Server running on port 3000");
