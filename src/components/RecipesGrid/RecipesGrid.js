import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import RecipeCard from './RecipeCard/RecipeCard';

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  max-width: 900px;
  margin: 20px auto;
  padding: 60px 15px 0 15px;
  @media all and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeGrid = ({ recipes }) => {
  const recipesCards = recipes.map(recipe => <RecipeCard key={recipe.slug} recipe={recipe} />);
  return (
    <div>
      <Navbar />
      <CardsGrid>
        { recipesCards }
      </CardsGrid>
    </div>
  );
};

RecipeGrid.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state, ownProps) {
  const recipes = state.sort((a, b) => b.addedAt - a.addedAt);
  if (ownProps.category === 'all') return { recipes };
  return {
    recipes: recipes.filter(recipe => recipe.category === ownProps.category),
  };
}

export default connect(mapStateToProps)(RecipeGrid);
