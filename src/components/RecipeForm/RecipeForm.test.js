import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../recipes';

import RecipeForm from './RecipeForm';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<RecipeForm />);
});

test('should render RecipeForm correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render RecipeForm with data', () => {
  wrapper = shallow(<RecipeForm recipe={recipes[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
  const value = 'Spaghetti';
  wrapper.find('Input').at(0).prop('handleInputChange')({ target: { value } }, 'name');
  expect(wrapper.state('name')).toBe(value);
});

test('should set directions on textarea change', () => {
  const value = 'New directions';
  wrapper.find('Textarea').prop('handleInputChange')({ target: { value } }, 'directions');
  expect(wrapper.state('directions')).toBe(value);
});

test('should set ingredients on change', () => {
  const name = 'eggs';
  const quantity = '2-4';
  wrapper.find('Ingredients').prop('handleIngredientChange')({ target: { value: name } }, 'name', 0);
  wrapper.find('Ingredients').prop('handleIngredientChange')({ target: { value: quantity } }, 'quantity', 0);
  expect(wrapper.state('ingredients')[0]).toEqual({ name, quantity });
});

test('should add new ingredient input on addIngredientInput', () => {
  wrapper.find('Ingredients').prop('addIngredientInput')();
  expect(wrapper.state('ingredients').length).toBe(4);
});

test('should remove ingredient input on removeIngredientInput', () => {
  wrapper.find('Ingredients').prop('removeIngredientInput')(2);
  expect(wrapper.state('ingredients').length).toBe(2);
});

test('should set category on select change', () => {
  const value = 'breakfast';
  wrapper.find('Select').prop('handleInputChange')({ target: { value } }, 'category');
  expect(wrapper.state('category')).toBe(value);
});

test('should set tag on checkbox change', () => {
  wrapper.find('Checkbox').prop('handleTagChange')('vegan');
  expect(wrapper.state('tags')).toContain('vegan');
});

test('should remove tag when it is unchecked', () => {
  wrapper = shallow(<RecipeForm recipe={recipes[0]} />);
  wrapper.find('Checkbox').prop('handleTagChange')('healthy');
  expect(wrapper.state('tags')).not.toContain('healthy');
});

test('should set time on change', () => {
  const value = 12;
  wrapper.find('Input').at(1).prop('handleInputChange')({ target: { value } }, 'time');
  expect(wrapper.state('time')).toBe(value);
});

test('should set yields on change', () => {
  const value = '2-4';
  wrapper.find('Input').at(2).prop('handleInputChange')({ target: { value } }, 'yields');
  expect(wrapper.state('yields')).toBe(value);
});

test('should set image', () => {
  const image = 'assets/images/pancakes.jpg';
  wrapper.find('ImageForm').prop('setImage')(image);
  expect(wrapper.state('image')).toBe(image);
});

test('should call onCancel prop on "Cancel" button click', () => {
  const onCancelSpy = jest.fn();
  wrapper = shallow(<RecipeForm onCancel={onCancelSpy} />);
  wrapper.find('Button').at(0).simulate('click');
  expect(onCancelSpy).toHaveBeenCalled();
});

test('should render error for invalid form submission', () => {
  expect(wrapper).toMatchSnapshot();
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  wrapper = shallow(<RecipeForm recipe={recipes[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(recipes[0]);
});

