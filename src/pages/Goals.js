import { useState } from 'react';
import styled from 'styled-components';
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
  backdrop-filter: blur(20px);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Headline = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
`;
