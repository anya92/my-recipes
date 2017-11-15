import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLinks = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    font-size: 1.2rem;
    color: #333;
    text-decoration: none;
    margin: 10px 30px;
  }
`;

const Links = () => (
  <StyledLinks>
    <Link to="/breakfast">Breakfast</Link>
    <Link to="/dinner">Dinner</Link>
    <Link to="/desserts">Desserts</Link>
    <Link to="/snacks">Snacks</Link>
    <Link to="/drinks">Drinks</Link>
  </StyledLinks>
);

export default Links;
