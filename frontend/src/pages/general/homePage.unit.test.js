import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

import HomePage from './homePage';
import PageTitle from "../../components/pageTitle";
import Button from '../../components/button';

it("renders correctly", () => {
    const wrapper = shallow((<HomePage />));
    expect(wrapper.containsMatchingElement(<PageTitle />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Button>View All Houses</Button>)).toEqual(true);
});