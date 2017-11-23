import {
  ADD_NEW_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
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
    payload: recipe,
    id,
  };
  return action;
};

export const deleteRecipe = (id) => {
  const action = {
    type: DELETE_RECIPE,
    id,
  };
  return action;
};
