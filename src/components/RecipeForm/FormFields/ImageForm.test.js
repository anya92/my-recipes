import React from 'react';
import { shallow } from 'enzyme';

import ImageForm from './ImageForm';

let image;
let setImage;
let wrapper;

beforeEach(() => {
  image = '';
  setImage = jest.fn();
  wrapper = shallow(<ImageForm image={image} setImage={setImage} />);
});


test('should render ImageForm with no image correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ImageForm with image correctly', () => {
  image = 'assets/images/pancakes.jpg';
  wrapper = shallow(<ImageForm image={image} setImage={setImage} />);
  expect(wrapper).toMatchSnapshot();
});

test('should set image on input change', () => {
  const value = 'assets/images/nuts.jpg';
  wrapper.find('Input').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('image')).toBe(value);
});

test('should hide image on ChangeImage click', () => {
  image = 'assets/images/pancakes.jpg';
  wrapper = shallow(<ImageForm image={image} setImage={setImage} />);
  expect(wrapper.state('showImage')).toEqual(true);
  wrapper.find('ChangeImage').simulate('click');
  expect(wrapper.state('showImage')).toEqual(false);
});

test('should call setImage and show the image on "Save" span click', () => {
  expect(wrapper.state('showImage')).toEqual(false);
  wrapper.find('span').simulate('click');
  expect(setImage).toHaveBeenLastCalledWith('');
  expect(wrapper.state('showImage')).toEqual(true);
});
