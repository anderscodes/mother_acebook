import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				<p>User: {props.post.user_id}</p>
        <p>Date created: {props.post.createdAt}</p>
        <p>Post content: {props.post.content}</p>
			</div>
		</div>
	)
}

export default Post;
