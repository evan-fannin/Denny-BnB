import React from 'react';
import { shallow } from 'enzyme';

import PageTitle from './pageTitle';

it('renders correctly with a subtitle', () => {
    const shallowWrapper = shallow(<PageTitle title='Title' subtitle='Subtitle' />);

    expect(shallowWrapper.containsMatchingElement((
        <h1>
        Title
        </h1>
    ))).toBe(true);

    expect(shallowWrapper.containsMatchingElement((
        <h2>
        Subtitle
        </h2>
    ))).toBe(true);
});

it('renders correctly without a subtitle', () => {
    const shallowWrapper = shallow(<PageTitle title='Title' />);

    expect(shallowWrapper.containsMatchingElement((
        <h1>
        Title
        </h1>
    ))).toBe(true);

    expect(shallowWrapper.containsMatchingElement((
        <h2>
        Subtitle
        </h2>
    ))).toBe(false);
});