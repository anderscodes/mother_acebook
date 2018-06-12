import React from 'react';
import Posts from '../posts/posts';
const client = require('../client');
import PostsBuilder from '../posts/postsBuilder';
import CreatePost from  '../posts/createPost';

class LogicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

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

export default LogicWrapper;