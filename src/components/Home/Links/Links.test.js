import React from 'react';
import { shallow } from 'enzyme';

import Links from './Links';

describe('Links', () => {
  test('should render Links correctly', () => {
    const wrapper = shallow(<Links />);
    expect(wrapper).toMatchSnapshot();
  });
});
