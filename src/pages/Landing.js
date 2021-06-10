import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../images/cherish.svg';

export default function Landing() {
    return (
        <>
        <LogoWrapper>
        <LogoImage src={Logo} alt='The Cherish logo is an abstract heart' />
        </LogoWrapper>
        <Greeting>Hallo, Currywurst. Wie geht es Dir heute?</Greeting>
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
`

const EmojiWrapper = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3rem;
`

const Greeting = styled.p`
    align-items: center;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto';
    justify-content: center;
    margin-top: 10rem;
`

const LogoImage = styled.img`
    width: 13rem;
`;

const LogoWrapper = styled.section`
    display: grid;
    place-items: center;
`