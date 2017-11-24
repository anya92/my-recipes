import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  flex-basis: 50%;
  margin: 5px 0;
  label {
    font-weight: 400;
    cursor: pointer;
    max-width: 100%;
  }
  input[type="checkbox"] {
    display: none;
    & + label span {
      display: inline-block;
      cursor: pointer;
      width: 20px;
      height: 20px;
      margin: 1px 6px 0 10px;
      float: left;
      background-color: #C4C4C4;
      border-radius: 4px;
    }  
    &:checked + label span {
      position: relative;
      background-color: dodgerblue;
      &::after {
        content: '✔';
        color: #FFF;
        font-size: 1rem;
        position: absolute;
        top: 2px;
        left: 3px;
      }  
    }    
  }      
`;

const Checkbox = ({ tags, handleTagChange }) => {
  const possibleTags = ['vegan', 'healthy', 'gluten free', 'meat', 'quick&easy', 'spicy'];
  return (
    <div>
      <Label>Tags</Label>
      <Boxes>
        {
          possibleTags.map((tag, i) => (
            <Box key={i}>
              <input
                type="checkbox"
                name="tags"
                id={tag}
                checked={tags.includes(tag)}
                onChange={() => handleTagChange(tag)}
              />
              <label htmlFor={tag}>{tag}<span /></label>
            </Box>
          ))
        }
      </Boxes>
    </div>
  );
};

Checkbox.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleTagChange: PropTypes.func.isRequired,
};

export default Checkbox;
