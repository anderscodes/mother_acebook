import React from 'react';
import ReactDOM from 'react-dom';

import PostsBuilder from '../posts/postsBuilder'
import CreateDialog from  '../create/createDialog';

class CommonView extends React.Component {

    render() {
        return (
            <div>
            <div>
            <PostsBuilder />
            </div>
                <div>
            <CreateDialog />
                </div>
            </div>
        )
    }
}

export default CommonView;