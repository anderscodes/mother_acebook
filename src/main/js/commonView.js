import React from 'react';
import CreateDialog from "./create/createDialog";

class CommonView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    render() {
        return (
            <div>
                <PostsBuilder />
                <CreateDialog />
            </div>

        )
    }
}

export default CommonView;