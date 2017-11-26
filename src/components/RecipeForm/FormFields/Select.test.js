import React from 'react';
import { shallow } from 'enzyme';

import Select from './Select';

let category;
let handleInputChange;
let error;
let wrapper;

beforeEach(() => {
  category = '';
  handleInputChange = jest.fn();
  error = false;
  wrapper = shallow(<Select
    category={category}
    handleInputChange={handleInputChange}
    error={error}
  />);
});

test('should render Select with no selected category correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render Select with selected category correctly', () => {
  category = 'breakfast';
  wrapper = shallow(<Select
    category={category}
    handleInputChange={handleInputChange}
    error={error}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should call handleInputChange on select change', () => {
  const value = 'breakfast';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(handleInputChange).toHaveBeenLastCalledWith(
    expect.objectContaining({
      target: expect.any(String),
    }),
    'category',
  );
});
