import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';

const StyledInput = styled.div`
  div {
    display: flex;
    span {
      font-size: 1.1rem;
      background-color: #F2F2F2;
      display: inline-flex;
      align-items: center;
      padding: 0 5px;
      border-left: 2px solid #333;
    }
  }
  input, textarea {
    width: 100%;
    border: none;
    background-color: #F2F2F2;
    padding: 8px 2px;
    border-bottom: 2px solid #F2F2F2;
    &:focus {
      ${props => !props.error && 'border-bottom-color: dodgerblue;'};
      outline: none;
    }
    ${props => props.error && 'border: 2px solid crimson;'};
  }
  input {
    height: 40px;
    ${props => (props.additionalText && 'text-align: right; padding-right: 8px;')};
  }
`;

export const Input = ({
  name, value, handleInputChange, additionalText, type = 'text', error = false, isRequired,
}) => (
  <StyledInput additionalText={additionalText} error={error}>
    <Label htmlFor={name}>{name} {isRequired && '*'}</Label>
    <div>
      <input
        type={type}
        min={type === 'number' ? 0 : ''}
        id={name}
        value={value}
        onChange={e => handleInputChange(e, name)}
      />
      {additionalText && <span>{additionalText}</span>}
    </div>
  </StyledInput>
);

Input.defaultProps = {
  additionalText: '',
  type: 'text',
  error: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  additionalText: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
};

export const Textarea = ({
  name, value, handleInputChange, error, isRequired,
}) => (
  <StyledInput error={error}>
    <Label htmlFor={name}>{name} {isRequired && '*'}</Label>
    <textarea
      id={name}
      rows={4}
      value={value}
      onChange={e => handleInputChange(e, name)}
    />
  </StyledInput>
);

Textarea.defaultProps = {
  error: false,
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
};
