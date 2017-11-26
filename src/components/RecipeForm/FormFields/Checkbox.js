import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';
import Input from '../styled/Input';

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
              <Input
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
