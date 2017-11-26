import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import RecipeForm from '../RecipeForm/RecipeForm';
import { addNewRecipe } from '../../actions';

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  margin-bottom: 10px;
`;

export class AddRecipe extends Component {
  onSubmit = (recipe) => {
    this.props.addNewRecipe(recipe);
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
          <Title>Add new recipe</Title>
          <RecipeForm
            recipes={this.props.recipes}
            onSubmit={this.onSubmit}
            onCancel={this.onCancel}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state };
}

export default connect(mapStateToProps, { addNewRecipe })(AddRecipe);
