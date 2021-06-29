import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import Grid from '../components/Grid';
import returnIcon from '../images/return.svg';

export default function Tracker({ habits }) {
  return (
    <div>
      <Headline>Tracker</Headline>
      <Grid habits={habits} />
      <NavLink to="/today" style={{ textDecoration: 'none' }}>
        <Button>
          zurück
          <img src={returnIcon} alt="return icon" height="20px" />
        </Button>
      </NavLink>
    </div>
  );
}

const Button = styled.button`
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  border: 1px solid ivory;
  border-radius: 1.75rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  bottom: 5%;
  color: var(--font);
  cursor: pointer;
  display: flex;
  font-size: 1.75rem;
  justify-content: space-around;
  right: 25%;
  padding: 0.75rem;
  position: absolute;
  width: 11rem;
`;

const Headline = styled.h1`
  color: var(--font);
  text-shadow: -1px 1px 0px var(--font-shadow),
    -2px 2px 0px var(--font-shadow-medium), -3px 3px 0px var(--font-shadow-dark);
  font-weight: 400;
  text-align: center;
`;
