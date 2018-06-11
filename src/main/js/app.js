import CommonView from "./commonView";

const React = require('react');
const ReactDOM = require('react-dom');


class App extends React.Component {

  render() {
    return (
      <CommonView />
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
