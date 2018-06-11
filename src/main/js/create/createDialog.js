'use strict';

const React = require('react');
const ReactDOM = require('react-dom')
const client = require('../client');

class CreateDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var newPost = {};
        this.props.attributes.forEach(attribute => {
            newPost[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreate(newPost);

        this.props.attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = '';
        });

        window.location = "#";
    }
    render() {
      var inputs = this.props.attributes.map(attribute =>
          <p key={attribute}>
              <input type="text" placeholder={attribute} ref={attribute} className="field" />
          </p>
      );
      return (
          <div>
              <a href="#createPost">Create Post</a>
              <div id="createPost" className="modalDialog">
                  <div>
                      <a href="#" title="Close" className="close">X</a>
                      <h2>Create New Post</h2>
                      <form>
                          {inputs}
                          <button onClick={this.handleSubmit}>Create</button>
                      </form>
                  </div>
              </div>
          </div>
      )
    }

}

export default CreateDialog;

