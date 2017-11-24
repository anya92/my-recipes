import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';

const StyledSelect = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 100%;
  label {
    margin: 0 10px;
  }
  select {
    width: 50%;
    background-color: #F2F2F2;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    ${props => props.error && 'border: 2px solid crimson;'};    
  }
`;

const Select = ({ category, handleInputChange, error }) => (
  <StyledSelect error={error}>
    <Label htmlFor="category">Category *</Label>
    <select
      id="category"
      value={category || 'Choose'}
      onChange={e => handleInputChange(e, 'category')}
    >
      <option disabled hidden>Choose</option>
      <option value="breakfast">Breakfast</option>
      <option value="dinner">Dinner</option>
      <option value="dessert">Dessert</option>
      <option value="snacks">Snack</option>
      <option value="drinks">Drink</option>
    </select>
  </StyledSelect>
);

Select.propTypes = {
  category: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Select;
