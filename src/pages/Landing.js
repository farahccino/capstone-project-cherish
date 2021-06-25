import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../images/cherish.svg';
import { format } from 'date-fns';

export default function Landing() {
  const [currentMood, setCurrentMood] = useState(
    loadFromLocalStorage('currentMood') ?? []
  );

  let history = useHistory();

  useEffect(() => {
    saveToLocalStorage('currentMood', currentMood);
  }, [currentMood]);

  function placeIntoStorage(emoji) {
    const today = format(new Date('2021-07-12'), 'yyyy-MM-dd');
    setCurrentMood([{ [today]: emoji }, ...currentMood]);
  }

  function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocalStorage(key) {
    try {
      const localData = localStorage.getItem(key);
      return JSON.parse(localData);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <LogoWrapper>
        <LogoImage src={Logo} alt="The Cherish logo is an abstract heart" />
      </LogoWrapper>
      <Greeting>Wie geht es Dir heute?</Greeting>
      <EmojiWrapper>
        <Emoji onClick={() => placeIntoStorage('😞')}> 😞 </Emoji>

        <Emoji onClick={() => placeIntoStorage('😕')}> 😕 </Emoji>

        <Emoji onClick={() => placeIntoStorage('😐')}> 😐 </Emoji>

        <Emoji onClick={() => placeIntoStorage('🙂')}> 🙂 </Emoji>

        <Emoji onClick={() => placeIntoStorage('😄')}> 😄 </Emoji>
      </EmojiWrapper>
    </>
  );
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
`;

const EmojiWrapper = styled.section`
  align-items: center;
  background-color: blanchedalmond;
  border-radius: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Greeting = styled.p`
  align-items: center;
  background-color: #76c39b;
  border-radius: 100vw;
  color: #00807b;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  font-size: 1.5rem;
  justify-content: center;
  margin-top: 10rem;
  padding: 0.4rem;
`;

const LogoImage = styled.img`
  width: 13rem;
`;

const LogoWrapper = styled.section`
  display: grid;
  place-items: center;
`;
