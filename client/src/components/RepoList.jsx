import React from 'react';

const RepoList = (props) => {
	// TODO: Render whole list of top 25
	return (
	  <div>
	    <h4> Repo List Component </h4>
	    There are {props.repos.length} repos.
	  </div>
	)
}

export default RepoList;