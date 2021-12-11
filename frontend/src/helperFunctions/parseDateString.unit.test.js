import React from 'react';
import { shallow } from 'enzyme';

import parseDateString from './parseDateString';

it('returns the expected date string', () => {
    const specificDate = new Date(2021, 11, 6); // Month is an index value; 11 == December
    expect(parseDateString(specificDate)).toBe('Monday, December 6');
});