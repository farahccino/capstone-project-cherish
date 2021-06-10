import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../images/cherish.svg';

export default function Landing() {
    return (
        <>
        <LogoWrapper>
        <LogoImage src={Logo} alt='The Cherish logo is an abstract heart' />
        </LogoWrapper>
        <button> 😞 </button>
        <button> 😕 </button>
        <button> 😐 </button>
        <button> 🙂 </button>
        <button> 😄 </button>
        </>
    )
}

const LogoImage = styled.img`
  width: 12rem;
`;

const LogoWrapper = styled.section`
  display: grid;
  place-items: center;
`