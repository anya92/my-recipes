import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';

let index;
let recipesLength;
let handleNext;
let handlePrevious;
let wrapper;

beforeEach(() => {
  index = 3;
  recipesLength = 25;
  handleNext = jest.fn();
  handlePrevious = jest.fn();
  wrapper = shallow(<Nav
    index={index}
    recipesLength={recipesLength}
    handleNext={handleNext}
    handlePrevious={handlePrevious}
  />);
});

test('should not render previous if index = 0', () => {
  index = 0;
  wrapper = shallow(<Nav
    index={index}
    recipesLength={recipesLength}
    handleNext={handleNext}
    handlePrevious={handlePrevious}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render previous and next if index > 0', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should not render next if index > length of all recipes - 3', () => {
  index = 23;
  wrapper = shallow(<Nav
    index={index}
    recipesLength={recipesLength}
    handleNext={handleNext}
    handlePrevious={handlePrevious}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should called handleNext when next is clicked', () => {
  wrapper.find('#next').simulate('click');
  expect(handleNext).toHaveBeenCalled();
});

test('should called handlePrevious when previous is clicked', () => {
  wrapper.find('#previous').simulate('click');
  expect(handlePrevious).toHaveBeenCalled();
});
