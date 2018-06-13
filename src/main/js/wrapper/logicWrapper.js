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
      let user = Object.assign({}, this.state.user)
      user[event.target.name]=event.target.value
      this.setState({user})
      console.log("user", this.state.user)
//    let userState = this.state.user
//    console.log("user state", userState)
//    let userSignupForm = { userState }
//    userSignupForm[event.target.name]=event.target.value
//    console.log("user sign up form", userSignupForm)
//    this.setState({userSignupForm})
//    console.log("user state two", userState)
//    console.log("user sign up two", userSignupForm)
  }

  handleSubmitUsers(event) {
    event.preventDefault();
    var newUser = {}
    newUser["first_name"]=this.state.user.firstName
    newUser["last_name"]=this.state.user.lastName
    this.onCreateUser(newUser)
    let user = Object.assign({}, this.state.user)
    user.isComplete = true
    this.setState({user})
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