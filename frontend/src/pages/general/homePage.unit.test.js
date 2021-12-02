import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

import HomePage from './homePage';
import PageTitle from "../../components/pageTitle";

it("renders correctly", () => {
    const wrapper = shallow(<HomePage />);
    console.log(wrapper.debug());
    expect(wrapper.find(PageTitle);
});