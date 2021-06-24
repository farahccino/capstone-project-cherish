import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Tracker() {
  return (
    <div>
      <Headline>Tracker</Headline>
      <NavLink to="/today" style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <Button>zurück</Button>
        </ButtonWrapper>
      </NavLink>
    </div>
  );
}

const Button = styled.button`
  background-color: transparent;
  border-radius: 100vw;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0.5rem;
`;

const ButtonWrapper = styled.section`
  align-items: center;
  display: flex;
`;

const Headline = styled.h1`
  text-align: center;
  color: var(--secondary-dark);
`;
