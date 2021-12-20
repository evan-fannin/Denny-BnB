import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import axiosInstance from '../../axios';
import HouseDetail from './houseDetail';

it('renders correctly', async () => {
    const mockMatch = {
        params: {
            houseName: 'House'
        }
    };

    const axiosStub = sinon.stub(axiosInstance, 'get').resolves({
        data: {
            name: 'House',
            address: '555 Street St.',
            price_per_night: 100,
            images: ['img1', 'img2']
        }
    });

    const shallowWrapper = shallow((
        <HouseDetail match={mockMatch}/>
    ), {disableLifecycleMethods: true});

    const instance = shallowWrapper.instance();

    const parseImagesStub = sinon.stub(instance, 'parseImages').returns(['img1', 'img2']);

    await instance.componentDidMount();

    shallowWrapper.update();

    sinon.assert.calledOnce(axiosStub);
    sinon.assert.calledOnce(parseImagesStub);

    expect(shallowWrapper.find('#title').prop('title')).toBe('House');
    expect(shallowWrapper.find('#imageSlider').prop('images')).toEqual([{url: 'img1'}, {url: 'img2'}]);
    expect(shallowWrapper.find('#calendar').prop('houseName')).toBe('House');

    parseImagesStub.restore();
    axiosStub.restore();
});

test('parseImages works correcty', () => {
    const mockMatch = {
        params: {
            houseName: 'House'
        }
    };

    const shallowWrapper = shallow((
        <HouseDetail match={mockMatch}/>
    ), {disableLifecycleMethods: true});

    const instance = shallowWrapper.instance();

    const mockImages = [{image: 'string/string/string/string/string'}, {image: 'string/string/string/string/string'}];

    expect(instance.parseImages(mockImages)).toEqual(['/string/string/string', '/string/string/string']);
});

test('handleRedirectToBooking works correctly', () => {
    const mockMatch = {
        params: {
            houseName: 'House'
        }
    };

    const mockHistory = [];

    const shallowWrapper = shallow((
        <HouseDetail match={mockMatch} history={mockHistory} />
    ), {disableLifecycleMethods: true});

    const instance = shallowWrapper.instance();

    const mockStartDate = new Date(2021, 11, 6);
    const mockEndDate = new Date(2021, 11, 8);

    instance.handleRedirectToBooking(mockStartDate, mockEndDate);

    expect(shallowWrapper.state().startDate).toBe(mockStartDate);
    expect(shallowWrapper.state().endDate).toBe(mockEndDate);
    console.log(instance.props.history);
});