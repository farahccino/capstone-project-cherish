import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../images/cherish.svg';

export default function Landing() {
    return (
        <>
        <LogoWrapper>
        <LogoImage src={Logo} alt='The Cherish logo is an abstract heart' />
        </LogoWrapper>
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
    font-size: 3rem;
    padding: 0.5rem;
`

const EmojiWrapper = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 13rem;
`

const LogoImage = styled.img`
    width: 13rem;
`;

const LogoWrapper = styled.section`
    display: grid;
    place-items: center;
`