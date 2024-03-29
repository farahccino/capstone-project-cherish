import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { format } from 'date-fns';
import Logo from '../images/cherish.svg';

export default function Landing() {
  const [currentMood, setCurrentMood] = useState(
    loadFromLocalStorage('currentMood') ?? []
  );
  console.log(currentMood);
  const [currentMoodSaved, setCurrentMoodSaved] = useState(false);
  console.log(currentMoodSaved);
  let history = useHistory();

  const today = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    saveToLocalStorage('currentMood', currentMood);
  }, [currentMood]);

  useEffect(() => {
    if (currentMoodSaved) history.push('/today');
  }, [currentMoodSaved, history]);

  function loadFromLocalStorage(currentMood) {
    try {
      const localData = localStorage.getItem(currentMood);
      return JSON.parse(localData);
    } catch (error) {
      console.error(error);
    }
  }

  function placeIntoStorage(emoji) {
    console.log(today in currentMood, 'test');
    console.log(format(new Date(), 'yyyy-MM-dd'));
    setCurrentMood([{ [today]: emoji }, ...currentMood]);

    setCurrentMoodSaved(true);
  }

  function saveToLocalStorage(currentMood, data) {
    localStorage.setItem(currentMood, JSON.stringify(data));
  }

  return (
    <>
      <LogoWrapper>
        <LogoImage
          src={Logo}
          style={{ height: '25rem', width: '25rem' }}
          alt="The Cherish logo is an abstract heart"
        />
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
  animation: 2.5s ease 0s 1 normal none running bounceIn;
  background-color: rgba(255, 235, 205, 0.2);
  backdrop-filter: blur(1px);
  border-radius: 100vw;
  bottom: 7%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
  position: absolute;
  right: 8%;
  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    180% {
      transform: scale(1);
    }
  }
`;

const Greeting = styled.p`
  align-items: center;
  animation: 2s ease 0s 1 normal none running bounceIn;
  background-color: var(--secondary-dark-transparent);
  backdrop-filter: blur(1px);
  border-radius: 100vw;
  bottom: 25%;
  color: rgba(255, 255, 240, 0.8);
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  font-size: 1.5rem;
  justify-content: center;
  margin-top: 10rem;
  right: 15%;
  padding: 0.9rem;
  position: absolute;
  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    180% {
      transform: scale(1);
    }
  }
`;

const LogoImage = styled.img`
  filter: drop-shadow(-3px 3px 0px rgba(48, 11, 51, 0.67));
  height: 20rem;
  left: -11%;
  position: absolute;
  top: -7%;
  width: 20rem;
`;

const LogoWrapper = styled.section`
  display: grid;
  place-items: center;
`;
