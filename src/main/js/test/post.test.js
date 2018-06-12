import React from 'react';
import Posts from '../posts/posts';
import { render } from "react-testing-library";
import "dom-testing-library/extend-expect";

describe('Display posts', function () {
    const {getByTestId} = render(
        <Posts />
    );

    it('displays a title,', function() {
        expect(getByTestId("posts-title")).toHaveTextContent("Posts")
    })
})