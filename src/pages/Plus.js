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
  text-align: center;
`;
