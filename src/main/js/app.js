import LogicWrapper from "./wrapper/logicWrapper";

const React = require('react');
const ReactDOM = require('react-dom');

//I like sci-fi


class App extends React.Component {

  render() {
    return (
    <LogicWrapper />
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
