import {
  ADD_NEW_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_RECIPE: {
      const newRecipe = action.payload;
      return [...state, newRecipe];
    }
    case EDIT_RECIPE: {
      const recipe = action.payload;
      const { id } = action;
      return state.map(el => (el.id === id ? recipe : el));
    }
    case DELETE_RECIPE: {
      const { id } = action;
      return state.filter(recipe => recipe.id !== id);
    }
    default:
      return state;
  }
};
