import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import RecipeForm from '../RecipeForm/RecipeForm';

class EditRecipe extends Component {
  onSubmit = recipe => {
    console.log(recipe);
  }
  onCancel = () => {
    this.props.history.goBack();    
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Edit {this.props.recipe.name}</h1>
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
