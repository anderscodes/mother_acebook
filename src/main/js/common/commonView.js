import React from 'react';
import CreateDialog from "../create/createDialog";
import PostsBuilder from "../posts/postsBuilder";

class CommonView extends React.Component {
    constructor(props) {
        super(props);
    }

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