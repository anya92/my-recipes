import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../../recipes';

import RecipeCard from './RecipeCard';

test('should render RecipeCard correctly', () => {
  const wrapper = shallow(<RecipeCard recipe={recipes[0]} />);
  expect(wrapper).toMatchSnapshot();
});
