import React from 'react';
import Posts from '../posts/posts';
import CreatePost from  '../posts/createPost';
import CreateUser from '../users/createUser';
const client = require('../client');

class LogicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: '',
      user: {
        firstName: '',
        lastName: '',
        isComplete: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.handleChangeUsers = this.handleChangeUsers.bind(this);
    this.handleSubmitUsers = this.handleSubmitUsers.bind(this);
    this.onCreateUser = this.onCreateUser.bind(this)
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

  handleChangeUsers(event) {
    let userField = this.state.user
    if (event.target.name == "firstName") {
      userField.firstName = event.target.value
    } else {
      userField.lastName = event.target.value
    }
    this.setState({userField})
  }

  handleSubmitUsers(event) {
    event.preventDefault();
    var newUser = {}
    newUser["firstName"]=this.state.user.firstName
    newUser["lastName"]=this.state.user.lastName
    this.onCreateUser(newUser)
  }

  onCreateUser(newUser) {
    (client({
    method: 'POST',
    path: '/api/users',
    entity: newUser,
    headers: {'Content-Type': 'application/json'}
    })).then(response => {console.log(response)})
  }

    componentDidMount() {
      client({method: 'GET', path: '/api/posts'}).then(response => {
        this.setState({posts: response.entity._embedded.posts});
      });
    }

  render() {
    if (this.state.user.isComplete==false) {
    return (
      <div>
        <CreateUser value={this.state.user} handleChangeUsers={this.handleChangeUsers} handleSubmitUsers={this.handleSubmitUsers}/>
      </div>
    )
    }else {
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
}

export default LogicWrapper;