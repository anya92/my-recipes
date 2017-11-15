import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title';

test('should render Title correctly', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper).toMatchSnapshot();
});
