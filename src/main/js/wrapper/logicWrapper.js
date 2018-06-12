import React from 'react';
import Posts from '../posts/posts';
const client = require('../client');
import PostsBuilder from './posts/postsBuilder';
import CreateDialog from  './posts/createPost';

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
        <PostBuilder />
      </div>
    </div>

    )
  }
}

export default LogicWrapper;