import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';
import RecipeForm from '../RecipeForm/RecipeForm';

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  margin-bottom: 10px;
`;

export default class AddRecipe extends Component {
  onSubmit = (recipe) => {
    console.log(recipe);
    // redux action
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
          <RecipeForm onSubmit={this.onSubmit} onCancel={this.onCancel} />
        </div>
      </div>
    );
  }
}
