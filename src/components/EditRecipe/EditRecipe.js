import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uniqId from 'uniqid';

import Navbar from '../Navbar/Navbar';
import RecipeForm from '../RecipeForm/RecipeForm';

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
`;

class EditRecipe extends Component {
  onSubmit = recipe => {
    console.log(recipe, uniqId());
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
          <RecipeForm onSubmit={this.onSubmit} onCancel={this.onCancel} recipe={this.props.recipe} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const recipe = state.filter(rec => rec.slug === ownProps.match.params.slug);
  return {
    recipe: recipe[0]
  };
}

export default connect(mapStateToProps)(EditRecipe);
