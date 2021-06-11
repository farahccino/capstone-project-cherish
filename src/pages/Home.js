import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import FooterNavigation from '../components/FooterNavigation';

export default function Home() {
  return (
    <>
    <h1> This is the today page! </h1>
    <NavLink to="/tracker" className="link">
    <ButtonWrapper>
    <Button>zum Tracker</Button>
    </ButtonWrapper>
    </NavLink>
    <FooterNavigation />
    </>
  );
}

const Button = styled.button`
    background-color: transparent;
    border-radius: 100vw;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem;
    text-decoration: none;
`

const ButtonWrapper = styled.section`
    align-items: center;
    display: flex;
    margin-left: 8.5rem;
    margin-top: 28rem;
`