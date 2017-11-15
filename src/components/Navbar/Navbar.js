import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    color: #333;
    text-decoration: none;
  }
  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

const Brand = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  span {
    font-weight: 400;
  }
  margin: 15px 0;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    font-size: 1.3rem;
    margin: 0 30px;
    &.active {
      font-weight: 700;
    }
    @media screen and (max-width: 860px) {
      margin: 0 15px;
    }
  }
`;

const AddNewLink = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
  @media screen and (max-width: 860px) {
    margin-top: 15px;
  }
`;

const Navbar = () => (
  <StyledNavbar>
    <Brand><Link to="/"><span>my</span>Recipes</Link></Brand>
    <Links>
      <NavLink activeClassName="active" to="/breakfast">Breakfast</NavLink>
      <NavLink activeClassName="active" to="/dinner">Dinner</NavLink>
      <NavLink activeClassName="active" to="/desserts">Desserts</NavLink>
      <NavLink activeClassName="active" to="/snacks">Snacks</NavLink>
      <NavLink activeClassName="active" to="/drinks">Drinks</NavLink>
    </Links>
    <AddNewLink><NavLink to="/add">Add&nbsp;New</NavLink></AddNewLink>
  </StyledNavbar>
);

export default Navbar;
