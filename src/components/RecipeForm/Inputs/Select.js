import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.div`
  margin: 10px 0;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 100%;
  label {
    color: #4F4F4F;
    font-weight: 700;
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
    <label htmlFor="category">Category</label>
    <select
      id="category"
      value={category || 'Choose'}
      onChange={e => handleInputChange(e, 'category')}
    >
      <option disabled hidden>Choose</option>
      <option value="breakfast">Breakfast</option>
      <option value="dinner">Dinner</option>
      <option value="dessert">Dessert</option>
      <option value="snack">Snack</option>
      <option value="drink">Drink</option>
    </select>
  </StyledSelect>
);

export default Select;
