import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Logo from '../images/cherish.svg';

export default function Landing() {
    const [emoji, setEmoji] = useState([]);
    return (
        <>
        <LogoWrapper>
        <LogoImage src={Logo} alt='The Cherish logo is an abstract heart' />
        </LogoWrapper>
        <Greeting>Wie geht es Dir heute?</Greeting>
        <EmojiWrapper>
        <NavLink to="/today" className="link">
        <Emoji> 😞 </Emoji>
        </NavLink>
        <NavLink to="/today" className="link">
        <Emoji> 😕 </Emoji>
        </NavLink>
        <NavLink to="/today" className="link">
        <Emoji> 😐 </Emoji>
        </NavLink>
        <NavLink to="/today" className="link">
        <Emoji> 🙂 </Emoji>
        </NavLink>
        <NavLink to="/today" className="link">
        <Emoji> 😄 </Emoji>
        </NavLink>
        </EmojiWrapper>
        </>
    )
}

const Emoji = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2.9rem;
    padding: 0.5rem;
  :hover {
    transform: scale(1.5);
  }
`

const EmojiWrapper = styled.section`
    align-items: center;
    background-color: blanchedalmond;
    border-radius: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3rem;
`

const Greeting = styled.p`
    align-items: center;
    background-color: #76C39B;
    border-radius: 100vw;
    color: #00807B;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto';
    font-size: 1.5rem;
    justify-content: center;
    margin-top: 10rem;
    padding: 0.4rem;
`

const LogoImage = styled.img`
    width: 13rem;
`;

const LogoWrapper = styled.section`
    display: grid;
    place-items: center;
`