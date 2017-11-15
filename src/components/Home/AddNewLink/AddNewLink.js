import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.div`
  text-align: center;
  margin: 15px 0;
  a {
    font-weight: 700;
    font-size: 1.35rem;
    text-decoration: none;
    color: #333;
  }
`;

const AddNewLink = () => (
  <StyledButton>
    <Link to="add">
      Add New
    </Link>
  </StyledButton>
);

export default AddNewLink;
