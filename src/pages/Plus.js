import styled from 'styled-components';
import HabitForm from '../components/HabitForm';
import FooterNavigation from '../components/FooterNavigation';

export default function Plus({ onAddHabit, setHabitToEdit }) {
  return (
    <>
      <Headline> Neues Ziel </Headline>
      <HabitForm onAddHabit={onAddHabit} setHabitToEdit={setHabitToEdit} />
      <FooterNavigation />
    </>
  );
}

const Headline = styled.h1`
  color: var(--font);
  text-shadow: -1px 1px 0px var(--font-shadow),
    -2px 2px 0px var(--font-shadow-medium), -3px 3px 0px var(--font-shadow-dark);
  font-weight: 400;
  text-align: center;
`;
