import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../../recipes';

import RecipeInfo from './RecipeInfo';

test('should render RecipeInfo correctly', () => {
  const wrapper = shallow(<RecipeInfo recipe={recipes[0]} />);
  expect(wrapper).toMatchSnapshot();
});
