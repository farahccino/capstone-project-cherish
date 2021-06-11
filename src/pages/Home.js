import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import FooterNavigation from '../components/FooterNavigation';


/*

checkboxes, die den State ändern, von false zu true

es soll ja im gleichen Key gespeichert werden wie emojis

false/true 

aber woher kennt er die Anzahl? 

er bekommt die Infos aus dem Formular
*/


export default function Home() {
  return (
    <>
    <Headline> This is the today page. </Headline>

    <section>
    <label>
        <input type="checkbox" /*onChange={function hier}*//> 
            Wasser trinken
    </label>
    <label>
        <input type="checkbox" /*onChange={function hier}*//> 
            Käsekuchen essen
    </label>
    <label>
        <input type="checkbox" /*onChange={function hier}*//> 
            Am Code verzweifeln
    </label>
    </section>

    

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
    margin-top: 430px;
`

const Headline = styled.h1`
    display: flex;
    align-items: center;
    font-family: 'Roboto'
`