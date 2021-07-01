import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { ReactComponent as PlusButton } from '../images/plus.svg';
import { ReactComponent as GoalButton } from '../images/goals.svg';
import { ReactComponent as HomeButton } from '../images/today.svg';

export default function FooterNavigation({ isStatic }) {
  return (
    <NavWrapper isStatic={isStatic}>
      <NavLink
        to="/today"
        activeClassName="active"
        style={{ textDecoration: 'none' }}
      >
        <HomeButtonStyled title="Home" role="img" />
        <Subtitle>Heute</Subtitle>
      </NavLink>
      <NavLink to="/add-goal" style={{ textDecoration: 'none' }}>
        <PlusButtonStyled title="Plus" role="img" />
        <Subtitle>Neu</Subtitle>
      </NavLink>
      <NavLink to="/goals" style={{ textDecoration: 'none' }}>
        <GoalButtonStyled title="Goal" role="img" />
        <Subtitle>Ziele</Subtitle>
      </NavLink>
    </NavWrapper>
  );
}

const HomeButtonStyled = styled(HomeButton)`
  height: 54px;
  width: 54px;

  .active & path {
    fill: var(--secondary);
    stroke: var(--secondary);
    stroke-width: 1;
  }
`;

const PlusButtonStyled = styled(PlusButton)`
  height: 54px;
  width: 54px;

  .active & path {
    fill: var(--glow);
    stroke: var(--secondary);
    stroke-width: 5;
  }
`;

const GoalButtonStyled = styled(GoalButton)`
  height: 54px;
  width: 54px;

  .active & path {
    fill: var(--secondary);
    stroke: var(--secondary);
    stroke-width: 1;
  }
`;

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
