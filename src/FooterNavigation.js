import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export default function FooterNavigation() {
    return (
    <NavWrapper>
        <NavLink exact to="/" className="link">
            today
        </NavLink>
        <NavLink to="/add-goal" className="link">
            plus
        </NavLink>
        <NavLink to="/goals" className="link">
            goals
        </NavLink>
     </NavWrapper>
    )
}

const NavWrapper = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`