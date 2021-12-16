import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import axiosInstance from '../../axios';
import UserBookings from './userBookings';
import BookingCard from './bookingCard';

it('renders correctly', async () => {
    const mockResponse = {
        data: [
            {
            house_name: 'House',
            price_per_night: 100,
            id: '1',
            thumbnail: '012345678srcString'
            }
        ]
    };

    const axiosStub = sinon.stub(axiosInstance, 'get').resolves(mockResponse);

    const shallowWrapper = await shallow((
        <UserBookings />
    ));

    expect(shallowWrapper.find(BookingCard).prop('houseName')).toBe('House');
    expect(shallowWrapper.find(BookingCard).prop('price')).toBe(100);
    expect(shallowWrapper.find(BookingCard).prop('id')).toBe('1');
    expect(shallowWrapper.find(BookingCard).prop('image')).toBe('srcString');

    axiosStub.restore();
});