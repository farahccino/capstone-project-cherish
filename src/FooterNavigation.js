import { NavLink } from 'react-router-dom'


export default function FooterNavigation() {
    return (
        <footer className="footer">
      <nav className="navigation">
        <NavLink exact to="/" className="link">
          Today
        </NavLink>
        <NavLink to="/add-goal" className="link">
          Plus
        </NavLink>
        <NavLink to="/goals" className="link">
          Goals
        </NavLink>
      </nav>
    </footer>
    )
}
