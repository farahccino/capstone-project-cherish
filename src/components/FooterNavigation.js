import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import today from '../images/today.svg';
import plus from '../images/plus.svg';
import goals from '../images/goals.svg';

export default function FooterNavigation({ isStatic }) {
  return (
    <NavWrapper isStatic={isStatic}>
      <NavLink to="/today">
        <img src={today} alt="Today page" width="64" height="64" />
      </NavLink>
      <NavLink to="/add-goal">
        <img src={plus} alt="Adds a new entry" width="64" height="64" />
      </NavLink>
      <NavLink to="/goals">
        <img src={goals} alt="Goals page" width="64" height="64" />
      </NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.footer`
  background-color: var(--secondary);
  bottom: 0;
  display: flex;
  justify-content: space-around;
  opacity: 0.5rem;
  padding: 0.3rem;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  width: 100%;
`;
