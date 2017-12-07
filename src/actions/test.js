import {
  addNewRecipe,
  editRecipe,
  deleteRecipe,
} from './index';
import {
  ADD_NEW_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from './types';
import recipes from '../recipes';

test('should generate action object for adding a new recipe', () => {
  const action = addNewRecipe(recipes[0]);
  expect(action).toEqual({
    type: ADD_NEW_RECIPE,
    payload: recipes[0],
  });
});

test('should generate action object for editing a recipe', () => {
  const action = editRecipe(0, recipes[0]);
  expect(action).toEqual({
    type: EDIT_RECIPE,
    payload: recipes[0],
    id: 0,
  });
});

test('should generate action object for deleting a recipe', () => {
  const action = deleteRecipe(0);
  expect(action).toEqual({
    type: DELETE_RECIPE,
    id: 0,
  });
});
