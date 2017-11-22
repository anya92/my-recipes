import {
  ADD_NEW_RECIPE,
  EDIT_RECIPE,
} from './types';

export const addNewRecipe = (recipe) => {
  const action = {
    type: ADD_NEW_RECIPE,
    payload: recipe,
  };
  return action;
};

export const editRecipe = (id, recipe) => {
  const action = {
    type: EDIT_RECIPE,
  };
  return action;
};
