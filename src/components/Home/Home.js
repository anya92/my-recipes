import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './Title/Title';
import Links from './Links/Links';
import Gallery from './Gallery/Gallery';
import Nav from './Nav/Nav';
import AddNewLink from './AddNewLink/AddNewLink';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingIndex: 0
    };
  }

  getRecipesToGallery = () => {
    const { recipes } = this.props;   
    const { startingIndex } = this.state;    
    return recipes.slice(startingIndex, startingIndex + 3);
  }

  handleNext = () => {
    this.setState(prevState => {
      return {
        startingIndex: prevState.startingIndex + 3
      }
    });
  }

  handlePrevious = () => {
    this.setState(prevState => {
      return {
        startingIndex: prevState.startingIndex - 3
      }
    });
  }

  render() {
    const galleryRecipes = this.getRecipesToGallery();
    return (
      <div>
        <Title />
        <Links />
        <Gallery recipes={galleryRecipes} />
        <Nav 
          index={this.state.startingIndex}
          handlePrevious={this.handlePrevious}
          handleNext={this.handleNext}
          recipesLength={this.props.recipes.length}
        />
        <AddNewLink />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const recipes = state.sort((a, b) => b.addedAt - a.addedAt);
  return {
    recipes,
  };
}

export default connect(mapStateToProps)(Home);

