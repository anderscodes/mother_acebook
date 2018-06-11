const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import UsersBuilder from './users/usersBuilder'

class App extends React.Component {

  render() {
    return (
      <PostsBuilder />
      <UsersBuilder />
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
