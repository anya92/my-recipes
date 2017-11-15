import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledNav = styled.div`
  display: flex;
  max-width: 900px;
  margin: 20px auto;
  font-size: 1.2rem;
  div, a {
    width: calc(100% / 3);
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  a {
    color: #333;
    text-decoration: none;
    font-weight: 700;
  }
`;

const Nav = ({ index, handleNext, handlePrevious, recipesLength }) => (
  <StyledNav>
    {
      index > 0
      ? <div onClick={handlePrevious} id="previous">previous</div>
      : <div />
    }
    <Link to="/recipes">view all recipes</Link>
    {
      index < recipesLength - 3
      ? <div onClick={handleNext} id="next">next</div>
      : <div />
    }
  </StyledNav>
);

Nav.propTypes = {
  index: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  recipesLength: PropTypes.number.isRequired,
};

export default Nav;
