import {
  ADD_NEW_RECIPE,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_RECIPE:
      const newRecipe = action.payload;
      return [...state, newRecipe];
    default:
      return state;
  }
};
