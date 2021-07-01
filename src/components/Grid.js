import { useState } from 'react';
import styled from 'styled-components/macro';

import { format } from 'date-fns';

export default function Grid({ habits }) {
  const daysOfTheWeek = ['M', 'D', 'M', 'D', 'F', 'S', 'S'];

  const currentWeek = [
    '2021-06-28',
    '2021-06-29',
    '2021-06-30',
    '2021-07-01',
    '2021-07-02',
    '2021-07-03',
    '2021-07-04',
  ];

  const [trackingData, setTrackingData] = useState(
    loadFromLocalStorage('trackingData') ?? {}
  );

  const [currentMood, setCurrentMood] = useState(
    loadFromLocalStorage('currentMood') ?? []
  );

  const [bubble, setBubble] = useState(habits.map((habit) => habit.checked));

  function loadFromLocalStorage(key) {
    try {
      const localData = localStorage.getItem(key);
      return JSON.parse(localData);
    } catch (error) {
      console.error(error);
    }
  }

  function loadFromLocalStorage(trackingData) {
    try {
      const localData = localStorage.getItem(trackingData);
      return JSON.parse(localData);
    } catch (error) {
      console.error(error);
    }
  }

  const allDailyHabits = habits.filter(
    (habit) => habit.frequency === 'täglich'
  );

  const days = Object.keys(trackingData).sort();

  const currentMoodData = [
    { '2021-06-28': '🙂' },
    { '2021-06-29': '😄' },
    { '2021-06-30': '🙂' },
    { '2021-07-01': '😐' },
    { '2021-07-02': '😞' },
    { '2021-07-03': '😄' },
    { '2021-07-04': '😄' },
  ];

  return (
    <Section>
      {daysOfTheWeek.map((day) => {
        return <Days>{day}</Days>;
      })}
      <HabitTitle>mood</HabitTitle>
      {currentMoodData.map((mood) => (
        <Emojis>{Object.values(mood)[0]}</Emojis>
      ))}
      {allDailyHabits.map((habit, habitIndex) => {
        return days.map((day, index) => {
          const activityPerDay = trackingData[day].find(
            (activityPerDay) => activityPerDay.activity.id === habit.id
          );
          console.log(activityPerDay);
          return activityPerDay ? (
            <>
              {index === 0 && (
                <HabitTitle>{activityPerDay.activity.goal}</HabitTitle>
              )}

              <Bubble
                style={{
                  backgroundColor: activityPerDay.done ? 'var(--primary)' : '',
                }}
              ></Bubble>
            </>
          ) : null;
        });
      })}
    </Section>
  );
}

const Bubble = styled.div`
  border: 1.5px dashed;
  border-radius: 100vw;
  height: 1.25rem;
  margin: 0.25rem auto;
  width: 1.25rem;
`;

const Days = styled.p`
  font-weight: 500;
  text-align: center;

  :nth-child(1) {
    grid-column-start: 2;
  }
`;

const HabitTitle = styled.p`
  font-weight: 400;
  grid-column: 1;
  padding-right: 0.938rem;
  text-align: left;
  margin: 0 auto;
`;

const Emojis = styled.span`
  font-size: 1.5rem;
`;

const Section = styled.section`
  align-items: center;
  background-color: var(--primary-transparent);
  backdrop-filter: blur(7px);
  border: 1px solid ivory;
  border-radius: 1rem;
  color: ivory;
  display: grid;
  font: 1.125rem/1 'Roboto';
  grid-area: tracker;
  grid-auto-flow: row;
  grid-template-columns: max-content repeat(7, 1fr);
  grid-template-rows: repeat(4, 1.75rem);
  margin: 0 1rem;
  right: 5%;
  padding: 1.5rem;
`;
