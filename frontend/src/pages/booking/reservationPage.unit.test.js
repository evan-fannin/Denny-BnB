import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ReservationPage from './reservationPage';
import axiosInstance from '../../axios';

it('renders correctly', () => {
    const mockLocation = {
        state: {
            startDate: new Date(2021, 11, 6),
            endDate: new Date(2021, 11, 8),
            price: 100,
            name: 'House',
            images: ['mockSourceString']
        }
    };

    const shallowWrapper = shallow((
        <ReservationPage location={mockLocation} />
    ));

    expect(shallowWrapper.find('#houseName').text()).toBe('House');
    expect(shallowWrapper.find('#thumbnail').prop('src')).toBe('mockSourceString');
    expect(shallowWrapper.find('#checkIn').children('p').text()).toBe('Monday, December 6');
    expect(shallowWrapper.find('#checkOut').children('p').text()).toBe('Wednesday, December 8');
    expect(shallowWrapper.find('#price').children('p').text()).toBe('$200');
});

it('functions properly on submit with no error', async () => {
    const mockLocation = {
        state: {
            startDate: new Date(2021, 11, 6),
            endDate: new Date(2021, 11, 8),
            price: 100,
            name: 'House',
            images: ['mockSourceString']
        }
    };

    const mockHistory = {push: () => {'hello'}};
    const historyStub = sinon.stub(mockHistory, 'push').returns('stub');

    const axiosStub = sinon.stub(axiosInstance, 'post').resolves({jsonThings: 'things'});

    const shallowWrapper = shallow((
        <ReservationPage location={mockLocation} history={mockHistory} />
    ));

    await shallowWrapper.find('Button').simulate('click', {preventDefault: () => {}});

    sinon.assert.calledOnce(axiosStub);
    sinon.assert.calledOnce(historyStub);

    axiosStub.restore();
    historyStub.restore();
});

it('functions properly on submit with an error', async () => {
    const mockLocation = {
        state: {
            startDate: new Date(2021, 11, 6),
            endDate: new Date(2021, 11, 8),
            price: 100,
            name: 'House',
            images: ['mockSourceString']
        }
    };

    const axiosStub = sinon.stub(axiosInstance, 'post').throws();
    const consoleLogStub = sinon.stub(console, 'log');

    const shallowWrapper = shallow((
        <ReservationPage location={mockLocation} />
    ));

    await shallowWrapper.find('Button').simulate('click', {preventDefault: () => {}});

    sinon.assert.calledOnce(axiosStub);
    expect(consoleLogStub.args[0].toString()).toEqual('Error: Error');

    axiosStub.restore();
    consoleLogStub.restore();
});