import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media all and (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  font-size: 1.2rem;
`;

Form.displayName = 'Form';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
