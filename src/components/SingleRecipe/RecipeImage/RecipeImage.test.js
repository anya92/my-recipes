import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../../recipes';

import RecipeImage from './RecipeImage';

test('should render RecipeImage correctly', () => {
  const { name, image, tags } = recipes[0];
  const wrapper = shallow(<RecipeImage name={name} image={image} tags={tags} />);
  expect(wrapper).toMatchSnapshot();
});
