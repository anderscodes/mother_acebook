import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../posts/post';

Enzyme.configure({adapter: new Adapter()});


describe('<Post />', () => {

    it('should display post with content and created at', () => {
    const post = shallow(
    <Post post={{content: 'Test', createdAt: '2018-08-19'}} /> );

    expect(post.text()).toEqual('Date created: 2018-08-19Post content: Test')

    });
});