import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../../recipes';

import Gallery from './Gallery';

test('should render Gallery correctly', () => {
  const wrapper = shallow(<Gallery recipes={recipes.slice(0, 3)} />);
  expect(wrapper).toMatchSnapshot();
});
