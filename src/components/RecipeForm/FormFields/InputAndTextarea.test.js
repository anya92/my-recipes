import React from 'react';
import { shallow } from 'enzyme';

import { Input, Textarea } from './InputAndTextarea';

let name;
let value;
let handleInputChange;
let wrapper;

describe('Input', () => {
  beforeEach(() => {
    name = 'name';
    value = '';
    handleInputChange = jest.fn();
    wrapper = shallow(<Input
      name={name}
      value={value}
      handleInputChange={handleInputChange}
    />);
  });

  test('should render Input correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should call handleInputChange on input change', () => {
    const inputValue = 'Spaghetti';
    wrapper.find('Input').simulate('change', { target: { value: inputValue } });
    expect(handleInputChange).toHaveBeenLastCalledWith({ target: { value: inputValue } }, name);
  });
});

describe('Textarea', () => {
  beforeEach(() => {
    name = 'directions';
    value = '';
    handleInputChange = jest.fn();
    wrapper = shallow(<Textarea
      name={name}
      value={value}
      handleInputChange={handleInputChange}
    />);
  });

  test('should render Textarea correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should call handleInputChange on textarea change', () => {
    const textareaValue = 'New directions.';
    wrapper.find('Textarea').simulate('change', { target: { value: textareaValue } });
    expect(handleInputChange).toHaveBeenLastCalledWith({ target: { value: textareaValue } }, name);
  });
});
