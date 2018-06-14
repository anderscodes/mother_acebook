import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div>
      <h1 className='welcome-title'>
      Welcome to Acebook
      </h1>
      <h2 className='welcome-subtitle'>
      Please Login or Sign Up to Post
      </h2>
      <div>
      <button onClick={this.props.loadSignUp}>Sign Up</button>
      </div>
      <div>
      <button onClick={this.props.loadLogin}>Login</button>
      </div>
      </div>
    )
  }
}

export default HomePage;