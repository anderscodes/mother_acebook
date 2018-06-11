import React from 'react';
import User from './user'

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
  }

	render() {
		return (
      <article className='users-main'>
        <h1 className='users-title'>
          Users
        </h1>
  			<div className='users-items'>
  				{this.getUsers()}
  			</div>
      </article>
		)
	}

  getUsers() {
    return this.props.users.map(user =>
			<User key={user._links.self.href} user={user}/>
		);
  }
}

export default Users;
