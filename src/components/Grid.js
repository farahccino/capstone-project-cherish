import { useState } from 'react';
import styled from 'styled-components/macro';

export default function Grid({ habits }) {
  const days = ['M', 'D', 'M', 'D', 'F', 'S', 'S'];

  const currentWeek = [
    '2021-06-28',
    '2021-06-29',
    '2021-06-30',
    '2021-07-01',
    '2021-07-02',
    '2021-07-03',
    '2021-07-04',
  ];

  // const dailyHabits = {
  //   '2021-06-28': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: true },
  //     { goal: 'Coden', done: false },
  //     { goal: 'Coden', done: false },
  //   ],
  //   '2021-06-29': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: false },
  //     { goal: 'Coden', done: true },
  //     { goal: 'Coden', done: true },
  //   ],
  //   '2021-06-30': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: false },
  //     { goal: 'Coden', done: false },
  //     { goal: 'Coden', done: false },
  //   ],
  //   '2021-07-01': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: true },
  //     { goal: 'Coden', done: false },
  //     { goal: 'Coden', done: false },
  //   ],
  //   '2021-07-02': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: true },
  //     { goal: 'Coden', done: false },
  //     { goal: 'Coden', done: false },
  //   ],
  //   '2021-07-03': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: true },
  //     { goal: 'Coden', done: false },
  //     { goal: 'Coden', done: false },
  //   ],
  //   '2021-07-04': [
  //     { goal: 'Essen', done: true },
  //     { goal: 'Lachen', done: true },
  //     { goal: 'Coden', done: false },
  //     { goal: 'Coden', done: false },
  //   ],
  // };

  const allDailyHabits = habits.filter(
    (habit) => habit.frequency === 'täglich'
  );

  const [bubble, setBubble] = useState(habits.map((habit) => habit.checked));
  return (
    <Section>
      {days.map((day) => {
        return <Days>{day}</Days>;
      })}
      {/* {allDailyHabits.map((dailyHabit, indexOfDailyHabit) => {
        {
          return currentWeek.map((day, index) => {
            return (
              <>
                {index === 0 ? (
                  <HabitTitle>
                    {dailyHabits[day][indexOfDailyHabit].activity.goal}
                  </HabitTitle>
                ) : null}
                <Bubble
                  style={{
                    backgroundColor: dailyHabits[day][indexOfDailyHabit].done
                      ? 'var(--primary)'
                      : '',
                  }}
                ></Bubble>
              </>
            );
          });
        }
      })} */}
      {/* {habits.map((habit) => {
        if (habit.frequency === 'täglich') {
          const color = habit.checked;
          return (
            <>
              <HabitTitle>{habit.goal}</HabitTitle>
              {bubble.map((bubble) => {
                return (
                  <Bubble
                    style={{
                      backgroundColor: bubble ? 'var(--primary)' : '',
                    }}
                  ></Bubble>
                );
              })}
            </>
          );
        }
      })} */}
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
