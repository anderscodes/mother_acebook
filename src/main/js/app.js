const React = require('react');
const ReactDOM = require('react-dom');
import CommonView from "./common/commonView";


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
