import React from 'react';
const client = require('../client');

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }


  componentDidMount() {
    client({
      method: 'GET',
      path: this.props.post._links.user.href
    }).then(response => {
      this.setState({user: response.entity.firstName})
    })
  }

  render() {
    return (
      <div className='post-main'>
        <div className='post-content'>
          <p>User: {this.state.user}</p>
          <p>Date created: {this.props.post.createdAt}</p>
          <p>Post content: {this.props.post.content}</p>
        </div>
      </div>
    )
}
    }

export default Post;
