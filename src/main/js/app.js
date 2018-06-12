import PostsBuilder from "./posts/postsBuilder";
import CreatePost from "./posts/createPost";

const React = require('react');
const ReactDOM = require('react-dom');




class App extends React.Component {

  render() {
    return (
        <div>
            <div>
                <CreatePost />
            </div>
            <div>
                <PostsBuilder />
            </div>


        </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
