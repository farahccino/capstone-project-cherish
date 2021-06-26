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
import trackerIcon from '../images/tracker.svg';

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

      {habits.length !== 0 &&
        (editMode === false ? (
          <EditButton onClick={() => setEditMode(true)}>
            edit mode
            <img src={editIcon} alt="" height="20px" />
          </EditButton>
        ) : (
          <EditButton align="right" onClick={() => setEditMode(false)}>
            <img src={returnIcon} alt="" height="20px" />
            zurück
          </EditButton>
        ))}

      <div>
        {habits.map((habit) => {
          if (habit.frequency === 'täglich') {
            return (
              <>
                {checkbox(habit.goal)}

                {editMode && (
                  <>
                    <ButtonWrapper>
                      <DeleteButton onClick={() => handleDeleteClick(habit.id)}>
                        <img src={deleteIcon} alt="löschen" height="16" />
                      </DeleteButton>
                      <ModalButton
                        onClick={() => {
                          setShowsEditModal(true);
                          onSetHabitToEdit(habit);
                        }}
                      >
                        <img src={editIcon} alt="bearbeiten" height="16" />
                      </ModalButton>
                    </ButtonWrapper>
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
        <TrackerButton>
          zum Tracker <img src={trackerIcon} alt="tracker icon" height="20px" />
        </TrackerButton>
      </NavLink>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackButton>
          zurück <img src={returnIcon} alt="return icon" height="20px" />
        </BackButton>
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

const EditButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 100vw;
  top: 14%;
  cursor: pointer;
  display: flex;
  right: 9%;
  position: absolute;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 100vw;
  cursor: pointer;
  right: 8%;
  top: 20%;
`;
const ModalButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 100vw;
  cursor: pointer;
  right: 13%;
  top: 20%;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;
