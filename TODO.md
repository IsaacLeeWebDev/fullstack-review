#TODO: Fullstack-review

-[X] Draw a diagram of all this stuff 

-[ ] Moar dependencies 
	-[X] body-parser
	-[X] express
	-[X] bluebird

-[ ] When a user types in a GitHub username
	-[X] Send a POST Request
	-[ ] GET that user's repos from GitHub's API

-[ ] src/index.jsx
	-[ ] finish App.search
		-[X] Send a post request
		-[ ] Render something on success with this.setState({repos: someArray });

-[ ] components/RepoList.jsx
	-[ ] Display the name of each repo in the top 25.

-[ ] helpers/github.js
	-[X] set up github API 
	-[ ] learn to make API calls with options.


-[ ] server/index.js
	-[ ] finish app.get
		-[ ] query the MongoDB with SELECT (? that's mysql. what's the equivalent for MongoDB?) for the top 25 repos.
	-[ ] finish app.post
		-[ ] read up on bluebird and promises, consider promisifying all the mongoDB
		-[ ] read the article in your slack 
		-[ ] read pseudocode

-[ ] Gold plates
	-[ ] Use Model.insertMany in database/index.js's save(). 