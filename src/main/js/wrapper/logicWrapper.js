import React from 'react';
import Posts from '../posts/posts';
import CreatePost from  '../posts/createPost';
import CreateUser from '../users/createUser';
import Welcome from '../commonviews/welcome';
import HomePage from '../commonviews/homePage';
import LoginUser from '../users/loginUser';
const client = require('../client');

class LogicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: '',
      user: {
        userName:'',
        firstName: '',
        lastName: '',
        isComplete: false
      },
      currentUser: [],
      visit: 'newVisit',
      users: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCreate = this.onCreate.bind(this)
    this.handleChangeUsers = this.handleChangeUsers.bind(this)
    this.handleSubmitUsers = this.handleSubmitUsers.bind(this)
    this.onCreateUser = this.onCreateUser.bind(this)
    this.loadSignUp = this.loadSignUp.bind(this)
    this.loadLogin = this.loadLogin.bind(this)
    this.logInUser = this.logInUser.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var newPost = {}
    newPost["content"] = this.state.value
    newPost["user"] = this.state.currentUser._links.self.href
    this.onCreate(newPost)
    this.setState({value: ''})

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
    } else if (event.target.name == "lastName") {
      userField.lastName = event.target.value
    } else {
      userField.userName = event.target.value
    }
    this.setState({userField})
  }

  handleSubmitUsers(event) {
    event.preventDefault();
    var newUser = {}
    newUser["userName"]=this.state.user.userName
    newUser["firstName"]=this.state.user.firstName
    newUser["lastName"]=this.state.user.lastName
    this.onCreateUser(newUser)
    this.setState({visit: 'posts'})
  }

  onCreateUser(newUser) {
    (client({
    method: 'POST',
    path: '/api/users',
    entity: newUser,
    headers: {'Content-Type': 'application/json'}
    })).then(response => {
    this.setState({currentUser: response.entity})
    })
    }

    loadSignUp() {
       this.setState({visit: 'signUp'});
    }

    loadLogin() {
      this.setState({visit: 'login'});
    }

    logInUser() {
    (client({
        method: 'GET',
        path: '/api/users'
        })).then(response => {
        this.setState({users: response.entity._embedded.users});
        });
    }

    componentDidMount() {
      client({method: 'GET', path: '/api/posts'}).then(response => {
        this.setState({posts: response.entity._embedded.posts});
      });
    }

  render() {
    if (this.state.visit=='newVisit') {
      return (
      <div>
        <HomePage loadSignUp={this.loadSignUp} loadLogin={this.loadLogin}/>
      </div>
      )
    } else if (this.state.visit=='signUp') {
    return (
      <div>
        <CreateUser value={this.state.user} handleChangeUsers={this.handleChangeUsers} handleSubmitUsers={this.handleSubmitUsers}/>
      </div>
    )
    } else if (this.state.visit=='login') {
      <div>
      <LoginUser value={this.state}/>
      </div>
    }
    else if (this.state.visit=='posts') {
    return (
    <div>
      <div>
        <Welcome value={this.state.currentUser} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
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