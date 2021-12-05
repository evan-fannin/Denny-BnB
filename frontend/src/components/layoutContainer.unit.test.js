import React from 'react';
import { shallow } from 'enzyme';

import LayoutContainer from './layoutContainer';

it('renders correctly', () => {
    const mockChild = <div>Child</div>;
    const shallowWrapper = shallow((
        <LayoutContainer>
        {mockChild}
        </LayoutContainer>
    ));

    expect(shallowWrapper.containsMatchingElement(mockChild)).toBe(true);
});