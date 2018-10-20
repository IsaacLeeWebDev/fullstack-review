const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  forks_score: Number,
  owner: String,
  full_name: String
});


// convert the schema to a model
let Repo = mongoose.model('Repo', repoSchema);

let save = (repoObjectToBeCreated) => {
	// query MongoDB for repoObjectToBeCreated
	Repo.find({ owner: repoObjectToBeCreated.owner }).where('full_name', repoObjectToBeCreated.full_name).exec( (err, docs) => {
		if (err) {
			console.error('Error! >>>> ', err);
		} else {
			console.log(docs);
			if(/*repo is new*/) {
				let myDoc = new Repo(repoObjectToBeCreated);
	  			console.log('>>>>>>>>>>>>> Creating: ' property, value);
				myDoc.save( (err, value) => {
					if (err) {
						console.error(error);
					} else {
						console.log('>>>>>>>>>>> Success! Created: ', property, value)
					}
				});
			}
		
		// if repoObjectToBeCreated is new: 

// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB

module.exports.save = save;


// With Mongoose, everything is derived from a Schema. 

// A model is a class with which we construct documents
// with properties and behaviors as declared in our schema

// Functions added to the methods property of a schema get 
// compiled into the Model prototype and exposed on each 
// document instance:

// Each document can be saved to the database by calling its 
// save method. The first argument to the callback will be an 
// error if any occured. *The second argument seems to be 
// the document's name.*

// All documents created by a invoking a model 



// SELECT * FROM kitten WHERE name='fluff%'
// is the same as 
// Kitten.find({ name: /^fluff/ }, callback);
