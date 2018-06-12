import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
				{props.post.createdAt}
				{props.post.user_id}
			</div>
		</div>
	)
}

export default Post;
