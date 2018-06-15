import React from 'react';
import { Alert } from 'react-bootstrap';

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmitUsers}>
        <label>
          Sign Up:

           <label>
            First Name
            <input type="text" name="firstName" value={this.props.value.firstName} onChange={this.props.handleChangeUsers} />
          </label>

          <label>
            Last Name
            <input type="text" name="lastName" value={this.props.value.lastName} onChange={this.props.handleChangeUsers} />
          </label>

          <input type="submit" value="Submit" />

        </label>
    </form>
    )
  }
}

export default CreateUser;