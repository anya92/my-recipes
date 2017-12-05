import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../../recipes';

import Ingredients from './Ingredients';

let ingredients;
let handleIngredientChange;
let addIngredientInput;
let removeIngredientInput;
let error;
let wrapper;

beforeEach(() => {
  ingredients = [{ name: '', quantity: '' }, { name: '', quantity: '' }, { name: '', quantity: '' }];
  handleIngredientChange = jest.fn();
  addIngredientInput = jest.fn();
  removeIngredientInput = jest.fn();
  error = false;
  wrapper = shallow(<Ingredients
    ingredients={ingredients}
    handleIngredientChange={handleIngredientChange}
    addIngredientInput={addIngredientInput}
    removeIngredientInput={removeIngredientInput}
    error={error}
  />);
});

test('should render Ingredients with no ingredients correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render Ingredients with ingredients correctly', () => {
  wrapper.setProps({ ingredients: recipes[0].ingredients });
  expect(wrapper).toMatchSnapshot();
});

test('should call addIngredientInput on Add click', () => {
  wrapper.find('AddIngredient').simulate('click');
  expect(addIngredientInput).toHaveBeenCalled();
});

test('should call removeIngredientInput on Delete click', () => {
  wrapper.find('DeleteIngredient').at(0).simulate('click');
  expect(removeIngredientInput).toHaveBeenLastCalledWith(0);
});

test('should call handleIngredienChange on input change', () => {
  const name = 'honey';
  const quantity = '1 tablespoon';
  const nameInput = wrapper.find('Ingredient').at(0).find('Input').at(0);
  const quantityInput = wrapper.find('Ingredient').at(0).find('Input').at(1);
  nameInput.simulate('change', { target: { value: name } });
  expect(handleIngredientChange).toHaveBeenLastCalledWith({ target: { value: name } }, 'name', 0);
  quantityInput.simulate('change', { target: { value: quantity } });
  expect(handleIngredientChange).toHaveBeenLastCalledWith({ target: { value: quantity } }, 'quantity', 0);
});
