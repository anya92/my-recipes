import styled from 'styled-components';

const Button = styled.button`
  height: 50px;
  background-color: ${props => (props.blue ? 'dodgerblue' : '#C4C4C4')};
  color: ${props => props.blue && '#FFF'};
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  margin-top: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

Button.displayName = 'Button';

export default Button;
