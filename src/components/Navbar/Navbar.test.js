import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';

test('should render Navbar correctly', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
