import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let success = this.getTopRepos.bind(this);
    $.post('/repos', {
      'data': term,
      'success': success
    });
  }

  getTopRepos() {
    alert('got top repos!');
    // get request
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }

  componentDidMount() {
    this.getTopRepos();
  }
}

ReactDOM.render(<App />, document.getElementById('app'));