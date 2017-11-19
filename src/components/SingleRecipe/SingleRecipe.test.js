import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../recipes';

import { SingleRecipe } from './SingleRecipe';

test('should render SingleRecipe with recipe', () => {
  const wrapper = shallow(<SingleRecipe recipe={recipes[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render SingleRecipe without recipe', () => {
  const wrapper = shallow(<SingleRecipe recipe={[]} />);
  expect(wrapper).toMatchSnapshot();
});
