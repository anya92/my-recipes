import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.div`
  text-align: center;
  margin: 20px 0;
  padding: 10px;
  a {
    font-weight: 700;
    font-size: 1.35rem;
    text-decoration: none;
    color: #333;
    // background-color: dodgerblue;
    // padding: 5px 20px;
    // border-radius: 5px;
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
