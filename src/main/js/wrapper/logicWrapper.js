import React from 'react';
import Posts from '../posts/posts';
const client = require('../client');
import CreatePost from  '../posts/createPost';

class LogicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

    componentDidMount() {
      client({method: 'GET', path: '/api/posts'}).then(response => {
        this.setState({posts: response.entity._embedded.posts});
      });
    }

  render() {
    return (
    <div>
      <div>
        <CreatePost />
      </div>
      <div>
        <Posts posts={this.state.posts}/>
      </div>
    </div>

    )
  }
}

export default LogicWrapper;