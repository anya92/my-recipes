import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../recipes';

import { AddRecipe } from './AddRecipe';

let history;
let addNewRecipe;
let wrapper;

beforeEach(() => {
  history = {
    push: jest.fn(),
    goBack: jest.fn(),
  };
  addNewRecipe = jest.fn();
  wrapper = shallow(<AddRecipe history={history} addNewRecipe={addNewRecipe} />);
});

test('should render AddRecipe correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onCancel', () => {
  wrapper.find('RecipeForm').prop('onCancel')();
  expect(history.goBack).toHaveBeenCalled();
});

test('should handle onSubmit', () => {
  wrapper.find('RecipeForm').prop('onSubmit')(recipes[0]);
  expect(addNewRecipe).toHaveBeenLastCalledWith(recipes[0]);
  expect(history.push).toHaveBeenLastCalledWith(`/recipes/${recipes[0].slug}`);
});
