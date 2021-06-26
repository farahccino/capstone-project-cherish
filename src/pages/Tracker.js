import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import Grid from '../components/Grid';

export default function Tracker() {
  return (
    <div>
      <Headline>Tracker</Headline>
      <Grid />
      <NavLink to="/today" style={{ textDecoration: 'none' }}>
        <Button>zurück</Button>
      </NavLink>
    </div>
  );
}

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 100vw;
  bottom: 2%;
  cursor: pointer;
  display: flex;
  font-size: 1.75rem;
  justify-content: space-around;
  padding: 0.5rem;
  position: absolute;
  right: 30%;
  width: 9rem;
`;

const Headline = styled.h1`
  color: var(--secondary-dark);
  text-align: center;
`;
