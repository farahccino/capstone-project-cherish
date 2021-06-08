import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import today from './images/today.svg';
import plus from './images/plus.svg';
import goals from './images/goals.svg';
 


export default function FooterNavigation() {
    return (
    <NavWrapper>
        <NavLink exact to="/" className="link">
            <img src={today} alt='Today page' />
        </NavLink>
        <NavLink to="/add-goal" className="link">
         <img src={plus} alt='Adds a new entry' />
        </NavLink>
        <NavLink to="/goals" className="link">
         <img src={goals} alt='Goals page' />
        </NavLink>
     </NavWrapper>
    )
}

const NavWrapper = styled.footer`
  background-color: bananamania;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;

 img {
    height: 3rem;
  }
`