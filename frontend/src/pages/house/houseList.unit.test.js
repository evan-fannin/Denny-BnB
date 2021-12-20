import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import axiosInstance from '../../axios';
import HouseList from './houseList';

it('renders correctly', async () => {
    const axiosStub = sinon.stub(axiosInstance, 'get').resolves({
        data: {
            ['house1', 'house2']
        }
    });

    const shallowWrapper = await shallow((
        <HouseList />
    ));

    expect(shallowWrapper.find())
});