import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ContentCard from './contentCard';

it('renders a hoverable card correctly', () => {
    const mockCallBack = sinon.spy();
    const mockChild = <div>Child</div>
    const shallowWrapper = shallow((
    <ContentCard
    onClick={mockCallBack}
    hover={true}
    >
        {mockChild}
    </ContentCard>));

    expect(shallowWrapper.containsMatchingElement(mockChild)).toBe(true);
    expect(shallowWrapper.find('div.content-card').exists()).toBe(true);
    shallowWrapper.find('div.content-card').simulate('click');
    expect(mockCallBack).toHaveProperty('callCount', 1);
});

it('renders a no-hover card correctly', () => {
    const mockCallBack = sinon.spy();
    const mockChild = <div>Child</div>
    const shallowWrapper = shallow((
    <ContentCard
    onClick={mockCallBack}
    >
        {mockChild}
    </ContentCard>));

    expect(shallowWrapper.containsMatchingElement(mockChild)).toBe(true);
    expect(shallowWrapper.find('div.content-card-no-hover').exists()).toBe(true);
    shallowWrapper.find('div.content-card-no-hover').simulate('click');
    expect(mockCallBack).toHaveProperty('callCount', 1);
});