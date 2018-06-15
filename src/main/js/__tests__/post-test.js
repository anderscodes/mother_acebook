import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../posts/post';

Enzyme.configure({adapter: new Adapter()});


describe('<Post />', () => {

  const post = shallow(
      <Post post={{content: 'Test', createdAt: '2018-08-19'}} />, {disableLifecycleMethods: true});


    it('should display post with content and created at', () => {


    expect(post.text()).toEqual('User: Date created: 2018-08-19Post content: Test')

    });
});