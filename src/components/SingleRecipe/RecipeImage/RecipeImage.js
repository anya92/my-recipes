import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRecipeImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media all and (max-width: 976px) {
    padding: 0 10px;
    img {
      max-height: 400px;
    }
  }
`;

const Tags = styled.div`
  color: #4F4F4F;
  margin-top: 5px;
  font-weight: 700;
  span {
    margin-right: 10px;
  }
`;

const RecipeImage = ({ name, image, tags }) => {
  const renderTags = tags.map((tag, i) => <span key={i}>#{tag}</span>);
  return (
    <StyledRecipeImage>
      <img src={image} alt={name} />
      <Tags>{ renderTags }</Tags>
    </StyledRecipeImage>
  );
};

RecipeImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeImage;
