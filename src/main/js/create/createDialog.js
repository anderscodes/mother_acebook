import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
    'max-width': '80%',
    margin: '0 auto'
}

class CreateDialog extends Component {
    constructor() {
        super();

        this.state = {
            formFields: {content: ''}
        }
    }

    render() {
        return(
            <div>
                <div class="panel panel-primary" style={panelStyle}>
                    <div class="panel panel-heading">Submit Post</div>
                    <div class="panel panel-body">
                        <form onSubmit={this.formHandler(this.state.formFields)}>
                            <strong>Content:</strong> <br />
                            <input type="textarea" name="content" placeholder="Put some text here" onChangeCapture={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.content} /> <br />
                            <button class="btn btn-primary">Submit Post</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

    inputChangeHandler(e) {
        let formFields = this.state.formFields;
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
    }

    formHandler(formFields) {
        axios.post('/api/posts', formFields)
            .then(function(response){
                console.log(response);
                //Perform action based on response
            })
            .catch(function(error){
                console.log(error);
                //Perform action based on error
            });
    }
}

export default CreateDialog