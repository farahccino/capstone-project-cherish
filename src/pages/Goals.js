import { useState } from 'react';
import styled from 'styled-components/macro';
import FooterNavigation from '../components/FooterNavigation';
import BasicTable from '../components/BasicTable';
import HabitForm from '../components/HabitForm';

export default function Goals({ habits, setHabits, onSaveHabit }) {
  const [showsEditModal, setShowsEditModal] = useState(false);
  const [habitToEdit, setHabitToEdit] = useState(null);

  function editHabit(habit) {
    setShowsEditModal(true);
    setHabitToEdit(habit);
  }

  function deleteHabit(id) {
    const remainingHabits = habits.filter((habit) => habit.id !== id);
    setHabits(remainingHabits);
    setShowsEditModal(false);
  }

  return (
    <>
      <Headline> Ziele </Headline>
      <BasicTable habits={habits} onEditHabit={editHabit} />
      {showsEditModal && (
        <HabitWrapper>
          <HabitForm
            onDeleteHabit={deleteHabit}
            setShowsEditModal={setShowsEditModal}
            habitToEdit={habitToEdit}
            onEditHabit={onSaveHabit}
          />
        </HabitWrapper>
      )}
      <FooterNavigation />
    </>
  );
}

const HabitWrapper = styled.div`
  align-items: center;
  backdrop-filter: blur(20px);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

const Headline = styled.h1`
  color: var(--font);
  text-shadow: -1px 1px 0px var(--font-shadow),
    -2px 2px 0px var(--font-shadow-medium), -3px 3px 0px var(--font-shadow-dark);
  font-weight: 400;
  text-align: center;
`;
