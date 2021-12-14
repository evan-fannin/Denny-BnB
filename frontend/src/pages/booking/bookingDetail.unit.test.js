import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import defaultParentImport from 'react-router';

import BookingDetail from './bookingDetail';
import axiosInstance from '../../axios';

it('renders correctly', async () => {
    const axiosStub = sinon.stub(axiosInstance, 'get').resolves({
        data: {
            start_date: new Date(2021, 11, 6).toString(),
            end_date: new Date (2021, 11, 8).toString(),
            price_per_night: 100,
            house_name: 'House',
            thumbnail: '012345678sliced src string'
        }
    });

     // stub useParams to return house id
    const useParamsStub = sinon.stub(defaultParentImport, 'useParams').returns('3')

    const shallowWrapper = await shallow((
        <BookingDetail />
    ));

    shallowWrapper.update();

    sinon.assert.calledOnce(axiosStub);

    expect(shallowWrapper.find('#houseName').text()).toBe('House');
    expect(shallowWrapper.find('#thumbnail').prop('src')).toBe('sliced src string');
    expect(shallowWrapper.find('#checkIn').children('p').text()).toBe('Monday, December 6');
    expect(shallowWrapper.find('#checkOut').children('p').text()).toBe('Wednesday, December 8');
    expect(shallowWrapper.find('#price').children('p').text()).toBe('$200');

    axiosStub.restore();
    useParamsStub.restore();
});

it('handles data fetch error', async () => {
    const axiosStub = sinon.stub(axiosInstance, 'get').throws();
    const useParamsStub = sinon.stub(defaultParentImport, 'useParams').returns('3')
    const consoleLogStub = sinon.stub(console, 'log');

    const shallowWrapper = await shallow((
        <BookingDetail />
    ));

    expect(consoleLogStub.args[0].toString()).toEqual('Error: Error');

    axiosStub.restore();
    useParamsStub.restore();
    consoleLogStub.restore();
});