import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  max-width: 900px;
  margin: 20px auto;
  padding: 0 15px;
  @media all and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  overflow: hidden;
  text-decoration: none;
  @media all and (min-width: 800px) {
    &:nth-child(10n + 1), &:nth-child(10n + 7) {
      display: flex;
      a div {
        height: 100%;
        max-height: 300px;
      }
      div { 
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-right: 10px;
        order: -1;
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
    }  
    &:nth-child(10n + 7) {
      grid-column: 2 / 4;
      div {
        order: 0;
        padding-left: 10px;
      }
    }
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

const RecipeGrid = ({ category, recipes }) => {
  const recipesCards = recipes.map((recipe) => {
    return (
      <Card key={recipe.slug}>
        <Link to={`/recipes/${recipe.slug}`}>
          <Image>
            <img src={recipe.image} alt={recipe.name} />
          </Image>
        </Link>  
        <RecipeName>
          <Link to={`/recipes/${recipe.slug}`}>
            <h3>{recipe.name}</h3>
            <p>Added {moment(recipe.addedAt).fromNow()}</p>
          </Link>  
        </RecipeName>
      </Card>
    );
  });
  return (
    <div>
      <Navbar />
      <CardsGrid>
        { recipesCards }
      </CardsGrid>
    </div>
  );
};


function mapStateToProps(state, ownProps) {
  if (ownProps.category === 'all') {
    return {
      recipes: state,
    };
  }
  const recipes = state.filter(recipe => recipe.category === ownProps.category);
  return {
    recipes,
  };
}

export default connect(mapStateToProps)(RecipeGrid);
