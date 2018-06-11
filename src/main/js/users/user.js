import React from 'react';

const User = (props) => {
	return (
		<div className='user-main'>
			<div className='user-content'>
				{props.user.content}
			</div>
		</div>
	)
}

export default User;
