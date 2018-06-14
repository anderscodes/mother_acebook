import React from 'react';

const Post = (props) => {
	console.log(`this is props.getUser ${props.getUser(props.userAddress)}`)
	return (
		<div className='post-main'>
			<div className='post-content'>
				<p>User: {props.getUser()}</p>
        <p>Date created: {props.post.createdAt}</p>
        <p>Post content: {props.post.content}</p>
			</div>
		</div>
	)
}

export default Post;
