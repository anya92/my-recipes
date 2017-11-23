import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  font-size: 1.2rem;
  label {
    display: block;
    text-transform: capitalize;
    color: #4F4F4F;
    font-weight: 700;
    margin: 5px 0;
  }
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
  name, value, handleInputChange, additionalText, type = 'text', error = false,
}) => (
  <StyledInput additionalText={additionalText} error={error}>
    <label htmlFor={name}>{name}</label>
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

export const Textarea = ({
  name, value, handleInputChange, error,
}) => (
  <StyledInput error={error}>
    <label htmlFor={name}>{name}</label>
    <textarea
      id={name}
      rows={4}
      value={value}
      onChange={e => handleInputChange(e, name)}
    />
  </StyledInput>
);
