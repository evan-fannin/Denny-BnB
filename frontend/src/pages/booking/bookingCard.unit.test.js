import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import defaultImportObject, { useHistory, MemoryRouter } from 'react-router-dom';

import BookingCard from './bookingCard';
import axiosInstance from '../../axios';

it('renders correctly', () => {
    const mockUseHistory = sinon.mock(useHistory);
    const props = {
        houseName: "House",
        image: 'sourceString',
        price: '100'
    };

    const shallowWrapper = shallow((
        <BookingCard {...props}/>
    ));

    expect(shallowWrapper.find('#houseName').text()).toBe('House');
    expect(shallowWrapper.find('#thumbnail').prop('src')).toBe('sourceString');
    expect(shallowWrapper.find('#price').text()).toBe('$100 / night');

    mockUseHistory.restore();
});

it('behaves properly on click', () => {
    const props = {
        houseName: "House",
        image: 'sourceString',
        price: '100',
        id: '1'
    };

    const wrapper = mount((
        <MemoryRouter>
            <BookingCard {...props}/>
        </MemoryRouter>
    ));

    wrapper.find('#linkArea').simulate('click');

    const history = wrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/user-bookings/1/');
});