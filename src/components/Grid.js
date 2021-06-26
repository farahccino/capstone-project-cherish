import styled from 'styled-components/macro';

export default function Grid() {
  return (
    <Section>
      <Days>M</Days>
      <Days>T</Days>
      <Days>W</Days>
      <Days>T</Days>
      <Days>F</Days>
      <Days>S</Days>
      <Days>S</Days>
      <HabitTitle>🏃‍♀️ Gym</HabitTitle>
      <Bubble></Bubble>
      <Bubble></Bubble>
      <Bubble></Bubble>
      <Bubble></Bubble>
      <Bubble></Bubble>
      <Bubble></Bubble>
      <Bubble></Bubble>
    </Section>
  );
}

const Bubble = styled.div`
  border: 1.5px dashed;
  border-radius: 100vw;
  height: 1.25rem;
  margin: auto;
  width: 1.25rem;
`;

const Days = styled.p`
  text-align: center;
  :nth-child(1) {
    grid-column-start: 2;
  }
`;

const HabitTitle = styled.p`
  grid-column: 1;
  padding-right: 0.938rem;
  text-align: left;
`;

const Section = styled.section`
  align-items: center;
  display: grid;
  font: 1.125rem/1 'Roboto';
  grid-area: tracker;
  grid-auto-flow: row;
  grid-template-columns: max-content repeat(7, 1fr);
  grid-template-rows: repeat(4, 1.75rem);
  margin: 1.25rem 0 0 1.25rem;
  text-align: center;
`;
