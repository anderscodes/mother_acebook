import React fro 'react';

class LoginUser extends React.Component {
  constructor(props) {
    super(props)
    }

    render() {
    return (
      <form onSubmit={this.props.logInUser}>
        <label>
          Login:

          <label>
            Username
            <input type="text" name="userName" value={this.props.value.userName} onChange={this.props.handleLogin} />
          </label>

          <input type="submit" value="Submit" />

        </label>
    </form>
    )}
}

export default LoginUser