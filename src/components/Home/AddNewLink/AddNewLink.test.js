import React from 'react';
import { shallow } from 'enzyme';

import AddNewLink from './AddNewLink';

test('should render AddNewLink correctly', () => {
  const wrapper = shallow(<AddNewLink />);
  expect(wrapper).toMatchSnapshot();
});
