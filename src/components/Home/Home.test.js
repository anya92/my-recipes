import React from 'react';
import { shallow } from 'enzyme';
import recipes from '../../recipes';

import { Home } from './Home';

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Home recipes={recipes} />);
});

test('should render Home correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should change startingIndex on handleNext', () => {
  wrapper.find('Nav').prop('handleNext')();
  expect(wrapper.state('startingIndex')).toBe(3);
});

test('should change startingIndex on handlePrevious', () => {
  wrapper.find('Nav').prop('handlePrevious')();
  expect(wrapper.state('startingIndex')).toBe(0);
});
