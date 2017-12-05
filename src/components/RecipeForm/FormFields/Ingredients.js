import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';
import Input from '../styled/Input';

const Ingredient = styled.div`
  display: flex;
  margin: 4px 0;
  height: 40px;
  ${Input} {
    width: calc(100% / 2 - 20px);
    flex: 1 1;
    &:first-child {
      ${props => (props.i === 0 && props.error) && 'border: 2px solid crimson;'};
    }
    &:nth-child(2) {
      margin-left: 4px;
    }
    &::-webkit-input-placeholder {
      color: #C4C4C4;
      font-size: 1.1rem;
    }
  }
`;
Ingredient.displayName = 'Ingredient';

const Delete = styled.span`
  background-color: #F2F2F2;
  font-size: 1.6rem;
  flex-basis: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 4px;
  cursor: pointer;
`;

Delete.displayName = 'DeleteIngredient';

const Add = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  background-color: #F2F2F2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

Add.displayName = 'AddIngredient';

const Ingredients = ({
  ingredients, handleIngredientChange, addIngredientInput, removeIngredientInput, error,
}) => (
  <div>
    <Label>Ingredients *</Label>
    {
      ingredients.map((ing, i) => (
        <Ingredient key={i} error={error} i={i}>
          <Input
            placeholder="name"
            value={ingredients[i].name}
            onChange={e => handleIngredientChange(e, 'name', i)}
          />
          <Input
            placeholder="quantity"
            value={ingredients[i].quantity}
            onChange={e => handleIngredientChange(e, 'quantity', i)}
          />
          <Delete onClick={() => removeIngredientInput(i)}>&times;</Delete>
        </Ingredient>
      ))
    }
    <Add onClick={addIngredientInput}>Add new ingredient</Add>
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleIngredientChange: PropTypes.func.isRequired,
  addIngredientInput: PropTypes.func.isRequired,
  removeIngredientInput: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Ingredients;
