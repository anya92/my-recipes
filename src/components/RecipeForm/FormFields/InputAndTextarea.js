import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../styled/Label';
import StyledInput from '../styled/Input';
import StyledTextarea from '../styled/Textarea';

const FormField = styled.div`
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
`;

export const Input = ({
  name, value, handleInputChange, additionalText, type = 'text', error = false, isRequired,
}) => (
  <FormField>
    <Label htmlFor={name}>{name} {isRequired && '*'}</Label>
    <div>
      <StyledInput
        type={type}
        min={type === 'number' ? 0 : ''}
        id={name}
        value={value}
        onChange={e => handleInputChange(e, name)}
        error={error}
        additionalText={additionalText}
      />
      {additionalText && <span>{additionalText}</span>}
    </div>
  </FormField>
);

Input.defaultProps = {
  additionalText: '',
  type: 'text',
  error: false,
  isRequired: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  additionalText: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export const Textarea = ({
  name, value, handleInputChange, error, isRequired,
}) => (
  <FormField>
    <Label htmlFor={name}>{name} {isRequired && '*'}</Label>
    <StyledTextarea
      id={name}
      rows={4}
      value={value}
      onChange={e => handleInputChange(e, name)}
      error={error}
    />
  </FormField>
);

Textarea.defaultProps = {
  error: false,
  isRequired: false,
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
};
