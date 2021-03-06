import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { editRecipe } from '../../actions';
import Navbar from '../Navbar/Navbar';
import RecipeForm from '../RecipeForm/RecipeForm';

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export class EditRecipe extends Component {
  onSubmit = recipe => {
    this.props.editRecipe(recipe.id, recipe);
    this.props.history.push(`/recipes/${recipe.slug}`);
  }
  onCancel = () => {
    this.props.history.goBack();    
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Title>Edit "{this.props.recipe.name}"</Title>
          <RecipeForm
            recipe={this.props.recipe}
            recipes={this.props.recipes}
            onSubmit={this.onSubmit}
            onCancel={this.onCancel}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const recipe = state.filter(rec => rec.slug === ownProps.match.params.slug);
  return {
    recipe: recipe[0],
    recipes: state,
  };
}

export default connect(mapStateToProps, { editRecipe })(EditRecipe);
