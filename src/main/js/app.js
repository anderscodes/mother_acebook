const React = require('react');
const ReactDOM = require('react-dom');

import PageBuilder from './pageBuilder/pageBuilder'

class App extends React.Component {

  render() {
    return (
        <PageBuilder />
    )
  }


}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)