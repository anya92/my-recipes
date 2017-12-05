import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

let tags;
let handleTagChange;
let wrapper;

beforeEach(() => {
  tags = [];
  handleTagChange = jest.fn();
  wrapper = shallow(<Checkbox tags={tags} handleTagChange={handleTagChange} />);
});

test('should render Checkbox with no tags selected correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render Checkbox with selected tags correctly', () => {
  tags = ['healthy', 'quick&easy'];
  wrapper.setProps({ tags });
  expect(wrapper).toMatchSnapshot();
});

test('should call handleTagChange on checkbox change', () => {
  const tag = 'vegan';
  wrapper.find(`#${tag}`).simulate('change');
  expect(handleTagChange).toHaveBeenLastCalledWith(tag);
});
