import React from 'react';
import Posts from '../posts/posts';
import CreatePost from  '../posts/createPost';

const client = require('../client');

class LogicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCreate = this.onCreate.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var newPost = {}
    newPost["content"] = this.state.value
    this.onCreate(newPost)

  }

  onCreate(newPost) {
    (client({method: 'POST',
      path: '/api/posts',
      entity: newPost,
      headers: {'Content-Type': 'application/json'}
    })).then(_ => {this.componentDidMount()})
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
        <CreatePost value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
      <div>
        <Posts posts={this.state.posts}/>
      </div>
    </div>

    )
  }
}

export default LogicWrapper;