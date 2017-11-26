import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../recipes';

import { EditRecipe } from './EditRecipe';

let history;
let editRecipe;
let wrapper;

beforeEach(() => {
  history = {
    push: jest.fn(),
    goBack: jest.fn(),
  };
  editRecipe = jest.fn();
  wrapper = shallow(<EditRecipe
    recipe={recipes[0]}
    history={history}
    editRecipe={editRecipe}
  />);
});

test('should render EditRecipe correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onCancel', () => {
  wrapper.find('RecipeForm').prop('onCancel')();
  expect(history.goBack).toHaveBeenCalled();
});

test('should handle onSubmit', () => {
  wrapper.find('RecipeForm').prop('onSubmit')(recipes[0]);
  expect(editRecipe).toHaveBeenLastCalledWith(recipes[0].id, recipes[0]);
  expect(history.push).toHaveBeenLastCalledWith(`/recipes/${recipes[0].slug}`);
});
