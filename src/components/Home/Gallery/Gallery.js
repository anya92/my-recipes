import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: auto;
  padding: 0 5px;
`;

const Image = styled.div`
  margin: 10px;
  flex: 1 1 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } 
  @media all and (min-width: 457px) {
    height: 250px;
  }
  @media all and (min-width: 678px) {
    height: 300px;
  }
  @media all and (min-width: 960px) {
    height: 400px;
    max-width: 300px;
  }
`;

const Gallery = ({ recipes }) => {
  const images = recipes.map(recipe => (
    <Image key={recipe.slug}>
      <Link to={`/recipes/${recipe.slug}`}>
        <img src={recipe.image} alt={recipe.name} />
      </Link>
    </Image>
  ));
  return <StyledGallery>{images}</StyledGallery>;
};

Gallery.defaultProps = {
  recipes: [],
};

Gallery.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
