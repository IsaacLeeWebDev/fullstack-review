const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gitHubHelper = require('../helpers/github.js');
const Promise = require('bluebird');
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.post('/repos', function (req, res) {

	// TODO - your code here!
	// This route should take the github username provided
	// and get the repo information from the github API, then
	// save the repo information in the database

	console.log('hello from /repos POST!');
	// console.log('req --------------->', req)
	// console.log('req.body ---------->', req.body);


	let info;
	let myCallback = (error, response, body) => {
		if (!error && response.statusCode == 200) {
			info = JSON.parse(body);
			return info;
		}
	};

	myPromCallback = Promisify(myCallback);
	console.log(myPromCallback);

	res.send(myPromCallback)


	// getUsersRepos = new Promise((resolve, reject) => {
	// 	gitHubHelper.getReposByUsername('IsaacLeeWebDev', myCallback);
	// 	resolve(info);	
	// });

	// getUsersRepos.then((infoValue) => {
	// 	console.log(infoValue);
	// 	res.send(infoValue);
	// });

	// getUsersRepos.then( (result) => res.send(info), (err) => res.send(err) )

	//  	setTimeout( () => {
	//   	for(let i = 0; i < gitHubResponse.length; i++) {
	// 	  	console.log('-----------------------------\n\n\n', gitHubResponse[i])
	// 	  	console.log('forks_count: >>>>>>>>>', gitHubResponse[i].forks_count );
	// 		console.log('forks_url: >>>>>>>>>', gitHubResponse[i].forks_url);
	// 	    console.log('owner >>>>>>>>>>', gitHubResponse[i].owner);
	// 	    console.log('full_name >>>>>>>>>', gitHubResponse[i].full_name);
	//   	}
	//   	setTimeout(() => res.send(gitHubResponse), 0);
	// }, 0);

  /*

  	instantiate an array for a user's repos
  		>each element will be an object
  		>each object will have three properties:
			-full_name (the repo's name)
			-owner (the repo's author)
			-fork_score (the total of the number of forks and forks of forks)

	query MongoDB with username to see if it matches the "owner" property of any repo in the list
		if the query returns results, return those to the client.
		else: 
		  	query GitHub with username to get a list of repos
		  		for each repo [i] in the response,
		  			usersRepos.push( {
		  				full_name : response[i].full_name, 
						owner: the query that came in,
						fork_score: response[i].forks_count	
					});
		  			query GitHub with GET (response[i]['forks_url'])
		  				for each repo [j] in the response,
		  					| invoke a recursive function that checks if the repo has forks and adds the forks_count to the forks_score 	|
		  					|	DEFINITION OF RECURSIVE FUNCTION: 																			|
				  			|	userRepos[i].fork_score += response[j].forks_count															|
				  			|	if the repo has more than zero forks, 																		|
				  			|		recurse 																								|

							
					query MongoDB for , inserting full_name as name, and forks_count as score
	*/

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('hello from /repos GET!');
  // PSEUDOCODE: 

  // query Top 25 schema
  	// Send everything in the response
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

