import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RecipeName = styled.div`
  a {
    color: #333;
    text-decoration: none;
  }  
  h3 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  p {
    color: #CCC;
    font-size: 1.15rem;
    text-transform: uppercase;
    margin: 10px 0;
  }  
`;

const Image = styled.div`
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCard = styled.div`
  overflow: hidden;
  text-decoration: none;
  @media all and (min-width: 800px) {
    &:nth-child(10n + 1), &:nth-child(10n + 7) {
      display: flex;
      ${Image} {
        height: 100%;
        max-height: 300px;
      }
      ${RecipeName} { 
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-basis: 50%;
        h3 {
          font-size: 1.7rem;
        }
        p {
          font-size: 1.3rem;
        }
      }
    }
    &:nth-child(10n + 1) {
      grid-column: 1 / 3;
      ${RecipeName} {
        padding-right: 10px;
        order: -1;
      }
    }  
    &:nth-child(10n + 7) {
      grid-column: 2 / 4;
      ${RecipeName} {
        order: 0;
        padding-left: 5px;
      }
    }
  }  
`;

const RecipeCard = ({ recipe }) => (
  <StyledCard key={recipe.slug}>
    <Link to={`/recipes/${recipe.slug}`}>
      <Image>
        <img src={recipe.image} alt={recipe.name} />
      </Image>
    </Link>
    <RecipeName>
      <Link to={`/recipes/${recipe.slug}`}>
        <h3>{recipe.name}</h3>
        <p>Added {moment(recipe.addedAt).from(moment())}</p>
      </Link>
    </RecipeName>
  </StyledCard>
);

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
