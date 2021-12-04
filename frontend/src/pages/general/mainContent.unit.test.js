import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

import MainContent from './mainContent';

it('renders correctly with children', () => {
    const wrapper = shallow((
        <MainContent>
            <div>Content</div>
        </MainContent>
    ));

    expect(wrapper.containsMatchingElement(<div>Content</div>)).toEqual(true);
});