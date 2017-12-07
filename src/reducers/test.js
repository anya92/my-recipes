import reducer from './index';
import {
  ADD_NEW_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from '../actions/types';
import recipes from '../recipes';

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a new recipe', () => {
  const recipe = {
    id: '123abc',
    name: 'Greek salad',
    directions: 'New directions',
    ingredients: [
      { name: 'romaine lettuce', quantity: '1 head' },
    ],
    category: 'dinner',
    tags: ['quick&easy'],
    time: '10',
    yields: '3',
    image: '',
    addedAt: 0,
    slug: 'greek-salad',
  };
  const action = {
    type: ADD_NEW_RECIPE,
    payload: recipe,
  };
  const state = reducer(recipes, action);
  expect(state).toEqual([...recipes, recipe]);
});

test('should edit a recipe', () => {
  const recipe = recipes[0];
  recipe.directions = 'Updated directions';
  const action = {
    type: EDIT_RECIPE,
    payload: recipe,
    id: 0,
  };
  const state = reducer(recipes, action);
  expect(state[0].directions).toBe('Updated directions');
});

test('should delete a recipe', () => {
  const action = {
    type: DELETE_RECIPE,
    id: '0',
  };
  const state = reducer(recipes, action);
  expect(state).toEqual(recipes.slice(1));
});
