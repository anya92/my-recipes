import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../recipes';

import { RecipeGrid } from './RecipeGrid';

test('should render RecipeGrid correctly', () => {
  const wrapper = shallow(<RecipeGrid recipes={recipes} />);
  expect(wrapper).toMatchSnapshot();
});
