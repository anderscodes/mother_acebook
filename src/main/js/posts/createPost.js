import React from 'react';
const client = require('../client');

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    Create New Post:
                    <input type="text" name="content" value={this.props.value} onChange={this.props.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreatePost