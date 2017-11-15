import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 20px 0 10px 0;
  span {
    font-weight: 400;
  }
`;

const Title = () => <StyledTitle><span>my</span>Recipes</StyledTitle>;

export default Title;
