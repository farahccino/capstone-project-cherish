import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

import FooterNavigation from '../components/FooterNavigation';
import HabitForm from '../components/HabitForm';

import editIcon from '../images/edit.svg';
import deleteIcon from '../images/delete.svg';
import returnIcon from '../images/return.svg';

Home.propTypes = {
  habits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};

export default function Home({
  habits,
  setHabits,
  id,
  habitToEdit,
  onSetHabitToEdit,
  onEditHabit,
}) {
  const [editMode, setEditMode] = useState(false);
  const [showsEditModal, setShowsEditModal] = useState(false);

  const date = format(new Date(), 'EEEE, dd.MM.yyyy', { locale: de });

  const checkbox = (value) => {
    return (
      <div>
        <input type="checkbox" />
        <span id={id}>{value}</span>
      </div>
    );
  };

  function handleDeleteClick(id) {
    const remainingHabits = habits.filter((habit) => habit.id !== id);
    setHabits(remainingHabits);
  }

  function handleEditClick(id) {
    const habitToEdit = habits.filter((habit) => habit.id === habitToEdit.id);
    setHabits(habitToEdit);
  }

  return (
    <>
      <Headline>{date}</Headline>
      <EditButtonWrapper>
        {habits.length !== 0 &&
          (editMode === false ? (
            <IconButton onClick={() => setEditMode(true)}>
              <img src={editIcon} alt="" height="20px" />
            </IconButton>
          ) : (
            <IconButton align="right" onClick={() => setEditMode(false)}>
              <img src={returnIcon} alt="" height="20px" />
            </IconButton>
          ))}
      </EditButtonWrapper>

      <div>
        {habits.map((habit) => {
          if (habit.frequency == 'täglich') {
            return (
              <>
                {checkbox(habit.goal)}

                {editMode && (
                  <>
                    <IconButton onClick={() => handleDeleteClick(habit.id)}>
                      <img src={deleteIcon} alt="löschen" height="16" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setShowsEditModal(true);
                        onSetHabitToEdit(habit);
                      }}
                    >
                      <img src={editIcon} alt="bearbeiten" height="16" />
                    </IconButton>
                  </>
                )}
              </>
            );
          }
        })}
      </div>

      {showsEditModal && (
        <HabitWrapper>
          <HabitForm
            setShowsEditModal={setShowsEditModal}
            habitToEdit={habitToEdit}
            onEditHabit={onEditHabit}
          />
        </HabitWrapper>
      )}

      <NavLink to="/tracker" className="link">
        <ButtonWrapper>
          <Button>zum Tracker</Button>
        </ButtonWrapper>
      </NavLink>
      <FooterNavigation />
    </>
  );
}

const Button = styled.button`
  background-color: transparent;
  border-radius: 100vw;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  text-decoration: none;
`;

const ButtonWrapper = styled.section`
  align-items: center;
  display: flex;
`;

const EditButtonWrapper = styled.div`
  align-items: end;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: end;
`;

const Headline = styled.h1`
  align-items: center;
  color: var(--secondary-dark);
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
`;

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

const IconButton = styled.button`
  border: none;
  border-radius: 100vw;
`;
