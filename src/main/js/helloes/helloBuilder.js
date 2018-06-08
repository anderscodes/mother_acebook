import React from 'react';
import Helloes from './helloes'
const client = require('../client');

class HelloBuilder extends React.Component{
    constructor(props){
        super(props)
        this.state = {helloes: []};
    }

    componentDidMount() {
        console.log("is it working");
        client({
            method: 'GET', path: '/api/helloes'}).then(response => {
            this.setState({helloes: response.entity._embedded.helloes});

        });
        };

    render() {
        return (
            <Helloes helloes={this.state.helloes}/>
        )
    }
}

export default HelloBuilder;