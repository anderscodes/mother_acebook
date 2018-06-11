import PostsBuilder from "./posts/postsBuilder";
import CreateDialog from "./create/createDialog";

const React = require('react');
const ReactDOM = require('react-dom');




class App extends React.Component {

  render() {
    return (
        <div>
            <div>
                <PostsBuilder />
            </div>
            <div>
                <CreateDialog />
            </div>

        </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
