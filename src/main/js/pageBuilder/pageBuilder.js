import React from 'react';
import PostsBuilder from '../posts/postsBuilder'
import HelloBuilder from "../helloes/helloBuilder";

const client = require('../client');

class PageBuilder extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <HelloBuilder/>
                </div>
                <div>
                    <PostsBuilder/>

                </div>
                </div>
        )
    }
}

export default PageBuilder;