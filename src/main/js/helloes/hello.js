import React from 'react';

const Hello = (props) => {
    return(
        <div className='hello-main'>
            <div className='hello-content'>
                {props.hello.content}
            </div>
        </div>
    )
}

export default Hello;