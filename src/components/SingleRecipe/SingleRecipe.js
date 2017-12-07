import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import RecipeInfo from './RecipeInfo/RecipeInfo';
import RecipeImage from './RecipeImage/RecipeImage';

import { deleteRecipe } from '../../actions';

const Recipe = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 25px;
  margin: 0 auto;
  hr {
    border: none;
    border-bottom: 1px solid #CCC;
  }
  @media all and (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'image';
  }
`;

const NotFound = styled.div`
  text-align: center;
`;

export class SingleRecipe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  confirmDelete = () => {
    return window.confirm(`Are you sure that you want to permanently delete "${this.props.recipe.name}"?`);
  }
  deleteRecipe = (id) => {
    if (this.confirmDelete()) {
      this.props.deleteRecipe(id);
      this.props.history.goBack();
    }
  }
  render() {
    const { recipe } = this.props;
    if (recipe.length === 0) {
      return (
        <div>
          <Navbar />
          <div className="container">
            <NotFound><h1>Not Found</h1></NotFound>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <div className="container">
          <Recipe>
            <RecipeInfo recipe={recipe} deleteRecipe={this.deleteRecipe} />
            <RecipeImage name={recipe.name} image={recipe.image} tags={recipe.tags} />
          </Recipe>
        </div>
      </div>
    );
  }
};

SingleRecipe.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

function mapStateToProps(state, ownProps) {
  const recipe = state.filter(rec => rec.slug === ownProps.match.params.slug);
  return { recipe: recipe[0] || [] };
}

export default connect(mapStateToProps, { deleteRecipe })(SingleRecipe);
