import React from 'react';
import Users from './users'
const client = require('../client');

class UsersBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {users: []};
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/users'}).then(response => {
      this.setState({users: response.entity._embedded.users});
    });
  }

	render() {
		return (
      <Users users={this.state.users}/>
		)
	}
}

export default UsersBuilder;