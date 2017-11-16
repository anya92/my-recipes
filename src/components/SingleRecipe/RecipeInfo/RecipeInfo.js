import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

const StyledRecipeInfo = styled.div`
  padding: 0 20px;
  @media all and (max-width: 976px) {
    padding: 0 10px;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    flex: 1 1 270px;
    padding-right: 5px;
    @media all and (max-width: 580px) {
      font-size: 1.8em;
      margin-bottom: 10px;
    }
  }
`;

const Options = styled.div`
  font-size: 1.2rem;
  margin-top: 5px;
  color: #4F4F4F;
  cursor: pointer;
  a {
    color: #4F4F4F;
    text-decoration: none;
  }
  i {
    margin: 0 2px 0 8px;
  }
`;

const AddedAt = styled.h3`
  color: #CCC;
  text-transform: uppercase;
  font-weight: 400; 
`;

const Directions = styled.div`
  h3 {
    margin: 0;
    text-transform: uppercase;
    color: #4F4F4F;
    font-weight: 400;
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
  }
`;

const Ingredients = styled.div`
  margin-top: 20px;
  h3 {
    margin: 0;
    text-transform: uppercase;
    color: #4F4F4F;
    font-weight: 400;
  }
  div {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    div {
      margin: 2px 0;
    }
    div:nth-child(even) {
      color: #4F4F4F;
    }
  }
`;

const Info = styled.div`
  color: #4F4F4F;
  span {
    margin-right: 10px;
  }
  i {
    margin: 0 5px;
  }
`;

const RecipeInfo = ({ recipe }) => {
  const ingredients = recipe.ingredients.map((ingredient, i) => (
    <div key={i}>
      <div>{ingredient.name}</div>
      <div>{ingredient.quantity}</div>
    </div>
  ));
  return (
    <StyledRecipeInfo>
      <Name>
        <h1>{recipe.name}</h1>
        <Options>
          <Link to={`/recipes/${recipe.slug}/edit`}><i className="fa fa-pencil" />Edit</Link> <i className="fa fa-times" />Delete
        </Options>
      </Name>
      <AddedAt>added {moment(recipe.addedAt).from(moment())}</AddedAt>
      <Directions>
        <h3>directions</h3><hr />
        <p>{recipe.directions}</p>
      </Directions>
      <Ingredients>
        <h3>ingredients</h3><hr />
        {ingredients}
      </Ingredients>
      <hr />
      <Info>
        <span><i className="fa fa-clock-o" />{recipe.time}</span>
        <span><i className="fa fa-users" />{recipe.yields}</span>
      </Info>
    </StyledRecipeInfo>
  );
};

RecipeInfo.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeInfo;
