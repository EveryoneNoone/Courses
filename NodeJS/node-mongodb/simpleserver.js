var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

//Connection URL
var url = 'mongodb://localhost:27017/conFusion';

//Use connect method to connect to the Server
MongoClient.connect(url, function(err, db){
	assert.equal(err,null);
	console.log("Connected correctly to server");

	var collection = db.collection("dishes");

	//insertOne method allow to insert one document into collection
	collection.insertOne({name: "Uthapizza", description: "test"},
	function(err,result){
		assert.equal(err,null);
		console.log("After insert:");
		//ops contains all the documents that have been inserted by this insert operation
		console.log(result.ops);
		collection.find({}).toArray(function(err,docs){
			assert.equal(err,null);
			console.log("Found:");
			console.log(docs);

			db.dropCollection("dishes", function(err, result){
				assert.equal(err,null);
				db.close();
			})
		})
	})
});