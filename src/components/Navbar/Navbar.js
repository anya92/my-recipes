import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  a {
    color: #333;
    text-decoration: none;
  }
  @media screen and (max-width: 976px) {
    flex-direction: column;
    padding: 0 20px;
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
    margin: 0 20px;
    &.active {
      font-weight: 700;
    }
    @media screen and (max-width: 976px) {
      margin: 5px 15px;
    }
  }
  @media screen and (max-width: 976px) {
    display: none;
    &.open {
      display: flex;
    }
  }
`;

const AddNewLink = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
  @media screen and (max-width: 976px) {
    margin-top: 15px;
    margin-bottom: 20px;
    display: none;
    &.open {
      display: block;
    }
  }
`;

const Toggle = styled.div`
  width: 30px;
  height: 25px;
  position: absolute;
  top: 25px;
  right: 20px;
  cursor: pointer;
  @media screen and (min-width: 976px) {
    display: none;
  }
  &::after, &::before, span {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #333;
    position: absolute;
  }
  &::after {
    top: 0;
  }
  &::before {
    bottom: 0;
  }
  span {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Navbar = () => (
  <StyledNavbar>
    <Brand>
      <Link to="/"><span>my</span>Recipes</Link>
    </Brand>
    <Toggle onClick={() => { document.querySelectorAll('.toggle').forEach(el => el.classList.toggle('open')); }}><span /></Toggle>
    <Links className="toggle">
      <NavLink activeClassName="active" to="/recipes">All&nbsp;recipes</NavLink>
      <NavLink activeClassName="active" to="/breakfast">Breakfast</NavLink>
      <NavLink activeClassName="active" to="/dinner">Dinner</NavLink>
      <NavLink activeClassName="active" to="/desserts">Desserts</NavLink>
      <NavLink activeClassName="active" to="/snacks">Snacks</NavLink>
      <NavLink activeClassName="active" to="/drinks">Drinks</NavLink>
    </Links>
    <AddNewLink className="toggle">
      <NavLink to="/add">Add&nbsp;New</NavLink>
    </AddNewLink>
  </StyledNavbar>
);

export default Navbar;
