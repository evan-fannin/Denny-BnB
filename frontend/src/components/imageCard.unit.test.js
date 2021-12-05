import React from 'react';
import { shallow } from 'enzyme';

import ImageCard from './imageCard';

it('renders correctly', () => {
    const shallowWrapper = shallow((
        <ImageCard src='/image' />
    ));

    expect(shallowWrapper.containsMatchingElement(<img src='/image' />)).toBe(true);
});