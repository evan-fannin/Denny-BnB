import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import axiosInstance from '../../axios';
import BookingCalendar from './bookingCalendar';
import Calendar from "react-calendar";

it('renders correctly', () => {
    const mockCallBack = sinon.spy();
    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
            handleRedirect={mockCallBack}
        />
    ));
    expect(shallowWrapper.find('Calendar').exists()).toBe(true);
});

it('does not call passed handleRedirect callback upon submit button click when dates are not selected', () => {
    const mockCallBack = sinon.spy();
    window.alert = jest.fn();

    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
            handleRedirect={mockCallBack}
        />
    ));

    expect(shallowWrapper.find('Button').exists()).toBe(true);
    shallowWrapper.find('Button').simulate('click');
    expect(mockCallBack).toHaveProperty('callCount', 0);
});

it('calls passed handleRedirect callback upon submit button click when dates are selected', () => {
    const mockCallBack = sinon.spy();

    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
            handleRedirect={mockCallBack}
        />
    ));

    shallowWrapper.setState({ startDate: 'dummyDateObject', endDate: 'dummyDateObject' });

    expect(shallowWrapper.find('Button').exists()).toBe(true);
    shallowWrapper.find('Button').simulate('click');
    expect(mockCallBack).toHaveProperty('callCount', 1);
});

it('calls api on mounting and properly sets state', async () => {
    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
        />
    ), {disableLifecycleMethods: true});

    const instance = shallowWrapper.instance();

    const mockResponse = {data: 'jsonObjects'}
    const axiosStub = sinon.stub(axiosInstance, "get").resolves(mockResponse);
    const generateBookedDatesStub = sinon.stub(instance, 'generateBookedDates').returns(['date1', 'date2']);

    await instance.componentDidMount();
    shallowWrapper.update();
    sinon.assert.calledOnce(axiosStub);
    sinon.assert.calledOnce(generateBookedDatesStub);
    expect(shallowWrapper.state()['disabledDates']).toEqual(['date1', 'date2']);

    axiosStub.restore();
    generateBookedDatesStub.restore();
});

it('handles clicking the start date correctly', () => {
    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
        />
    ));
    const instance = shallowWrapper.instance();

    const event = {};
    const startDate = new Date(2021, 11, 6);

    const getNextBookedDateStub = sinon.stub(instance, 'getNextBookedDate').returns('nextBookedDate');

    instance.handleClickDay(startDate, event);

    sinon.assert.calledOnce(getNextBookedDateStub);
    expect(shallowWrapper.state().startDate).toBe(startDate);
    expect(shallowWrapper.state().nextBookedDate).toBe('nextBookedDate');
    expect(shallowWrapper.state().endDate).toBe(null);

    getNextBookedDateStub.restore();
});

it('handles clicking the end date correctly when there are booked dates within the selected range', () => {
    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
        />
    ));

    const intermediateBookedDate = new Date(2021, 11, 5);

    shallowWrapper.setState({
        firstClick: false,
        nextBookedDate: intermediateBookedDate
    });

    const event = {};
    const endDate = new Date(2021, 11, 6);

    const instance = shallowWrapper.instance();

    const windowAlertStub = sinon.stub(window, 'alert');

    instance.handleClickDay(endDate, event);

    sinon.assert.calledOnce(windowAlertStub);
    expect(windowAlertStub.getCall(0).args[0]).toBe('Some dates in your range are already booked.\nPlease select a valid range.');

    windowAlertStub.restore();
});

it('handles clicking the end date correctly when there no booked dates within selected range', () => {
    const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
        />
    ));

    shallowWrapper.setState({
        firstClick: false,
    });

    const event = {};
    const endDate = new Date(2021, 11, 6);

    const instance = shallowWrapper.instance();

    instance.handleClickDay(endDate, event);

    expect(shallowWrapper.state().endDate).toBe(endDate);
});

test('parseMonthString works correctly', () => {
        const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
        />
        ));
        const instance = shallowWrapper.instance();

        const returnValue = instance.parseMonth('Jan');

        expect(returnValue).toBe('1');
});

test('generateBookedDates works correctly', () => {
        const shallowWrapper = shallow((
        <BookingCalendar
            houseName='House'
        />
        ), );
        const instance = shallowWrapper.instance();

        // Dates are saved and returned as strings in the django backend
        const mockData = [
            {start_date: new Date(2021, 11, 6).toString(), end_date: new Date(2021, 11, 6).toString()},
            {start_date: new Date(2021, 10, 20).toString(), end_date: new Date(2021, 10, 21).toString()},
            {start_date: new Date(2021, 11, 19).toString(), end_date: new Date(2021, 11, 21).toString()},
        ];

        const returnValue = instance.generateBookedDates(mockData);

        expect(returnValue).toEqual([
            new Date(2021, 10, 20),
            new Date(2021, 10, 21),
            new Date(2021, 11, 6),
            new Date(2021, 11, 19),
            new Date(2021, 11, 20),
            new Date(2021, 11, 21),
        ]);
});

