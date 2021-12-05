import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import sinon from 'sinon';

import Button from './button';

it('renders a link component when there is a "to" prop and displays child text', () => {
    const shallowWrapper = shallow(<Button to='/page'>Click Me</Button>);
    expect(shallowWrapper.containsMatchingElement(<Link to='/page'>Click Me</Link>)).toBe(true);
});

it('renders a submit button with correct text when there is no "to" prop', () => {
    const mockCallBack = sinon.spy();
    const shallowWrapper = shallow(<Button onClick={mockCallBack}>Click Me</Button>);

    shallowWrapper.find('button').simulate('click');
    expect(shallowWrapper.containsMatchingElement(<button>Click Me</button>)).toBe(true);
    expect(mockCallBack).toHaveProperty('callCount', 1);
});