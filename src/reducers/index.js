import {
  ADD_NEW_RECIPE,
  EDIT_RECIPE,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_RECIPE:
      const newRecipe = action.payload;
      return [...state, newRecipe];
    case EDIT_RECIPE:
      const recipe = action.payload;
      const { id } = action;
      return state.map(el => {
        if (el.id === id) {
          return recipe;
        }
        return el;
      });
    default:
      return state;
  }
};
