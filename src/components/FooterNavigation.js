import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import today from '../images/today.svg';
import plus from '../images/plus.svg';
import goals from '../images/goals.svg';

export default function FooterNavigation({ isStatic }) {
  return (
    <NavWrapper isStatic={isStatic}>
      <NavLink
        to="/today"
        activeClassName="active"
        style={{ textDecoration: 'none' }}
      >
        <img src={today} alt="Today page" width="54" height="54" />
        <Subtitle>Heute</Subtitle>
      </NavLink>
      <NavLink to="/add-goal" style={{ textDecoration: 'none' }}>
        <img src={plus} alt="Adds a new entry" width="54" height="54" />
        <Subtitle>Neu</Subtitle>
      </NavLink>
      <NavLink to="/goals" style={{ textDecoration: 'none' }}>
        <img src={goals} alt="Goals page" width="54" height="54" />
        <Subtitle>Ziele</Subtitle>
      </NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.footer`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(1px);
  border-top: 1px solid lemonchiffon;
  box-shadow: 0 0 6px 3px var(--glow), 0 0 10px 6px var(--glow),
    0 0 140px 90px var(--glow-fade);
  bottom: 0;
  display: flex;
  justify-content: space-around;
  opacity: 0.5rem;
  padding: 0.3rem;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  width: 100%;
`;

const Subtitle = styled.p`
  color: var(--font);
  font-size: 1rem;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
`;
