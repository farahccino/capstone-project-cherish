import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
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
          if (habit.frequency === 'täglich') {
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
          return null;
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

      <NavLink to="/tracker" style={{ textDecoration: 'none' }}>
        <TrackerButton>zum Tracker</TrackerButton>
      </NavLink>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackButton>zurück</BackButton>
      </NavLink>
      <FooterNavigation />
    </>
  );
}

const BackButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 100vw;
  bottom: 15%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  left: 10%;
  padding: 0.5rem;
  position: absolute;
  width: 9rem;
`;

const TrackerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 100vw;
  bottom: 15%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  right: 10%;
  padding: 0.5rem;
  position: absolute;
  width: 9rem;
`;

const EditButtonWrapper = styled.div`
  align-items: end;
  background-color: transparent;
  border: none;
  justify-content: end;
`;

const Headline = styled.h1`
  color: var(--secondary-dark);
  text-align: center;
`;

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

const IconButton = styled.button`
  border: none;
  border-radius: 100vw;
`;
