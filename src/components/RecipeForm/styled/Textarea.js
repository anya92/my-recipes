import styled from 'styled-components';

const Textarea = styled.textarea`
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
`;

export default Textarea;
