import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CardLinkArea from './cardLinkArea';

it('renders correctly and calls onClick prop', () => {
    const mockCallBack = sinon.spy();
    const mockChild = <div>Child</div>
    const shallowWrapper = shallow((
    <CardLinkArea
    onClick={mockCallBack}
    >
        {mockChild}
    </CardLinkArea>));

    expect(shallowWrapper.containsMatchingElement(mockChild)).toBe(true);
    shallowWrapper.find('div.card-link-area').simulate('click');
    expect(mockCallBack).toHaveProperty('callCount', 1);
});