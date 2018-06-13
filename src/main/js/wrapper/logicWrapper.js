import React from 'react';
import Posts from '../posts/posts';
const client = require('../client');
import CreatePost from  '../posts/createPost';
import CreateUser from '../users/createUser';

class LogicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: '',
      user: {
        firstName: '',
        lastName: ''
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
    let userState = this.state.user
    let userSignupForm = { userState }
    userSignupForm[event.target.name]=event.target.value
    this.setState({userSignupForm})

  }

  handleSubmitUsers(event) {
  event.preventDefault();
  var newUser = {}
  newUser["first_name"]=this.state.user.firstName
  newUser["last_name"]=this.state.user.lastName
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
    if (this.state.user.lastName=='') {
    return (
      <div>
        <CreateUser value={this.state.value} handleChangeUsers={this.handleChangeUsers} handleSubmitUsers={this.handleSubmitUsers}/>
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