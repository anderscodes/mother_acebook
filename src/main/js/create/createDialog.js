import React from 'react';

class CreateDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return(
            <form>
                <label>
                    Post:
                    <input type="text" value={this.state.value}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

    export default CreateDialog;