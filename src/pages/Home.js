import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import FooterNavigation from '../components/FooterNavigation';


export default function Home() {
    
 const initialState = () => {
     return JSON.parse(window.localStorage.getItem('habit'))  
 }
 

 const [today, setToday] = useState(initialState())

 const checkbox=(value)=>{
     return (
         <div>
             <input type="checkbox" />
             <span>{value}</span>
         </div>
     )
 }

  return (
    <>
    <Headline> This is the today page. </Headline>

    <section>
   
    <span>{today.map((item)=>{
     if(item.häufigkeit=="täglich"){
         return checkbox(item.ziel)
     }
    })}</span>

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