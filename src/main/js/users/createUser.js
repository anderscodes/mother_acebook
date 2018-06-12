import React from 'react';

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
            <input type="text" name="firstName" value={this.props.value} onChange={this.props.handleChangeUsers} />
          </label>

          <label>
            Last Name
            <input type="text" name="lastName" value={this.props.value} onChange={this.props.handleChangeUsers} />
          </label>

        </label>
    </form>
    )
  }
}

export default CreateUser