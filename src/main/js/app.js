const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import CreateDialog from  './posts/CreateDialog'

class App extends React.Component {

  render() {
    return (
      <CreateDialog/>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
