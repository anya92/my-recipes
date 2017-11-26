import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 2px;
  background-color: #F2F2F2;
  border: none;
  border-bottom: 2px solid #F2F2F2;
  &:focus {
    ${props => !props.error && 'border-bottom-color: dodgerblue;'};
    outline: none;
  }
  ${props => props.error && 'border: 2px solid crimson;'};
  ${props => (props.additionalText && 'text-align: right; padding-right: 8px;')};
  &[type="checkbox"] {
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

export default Input;
