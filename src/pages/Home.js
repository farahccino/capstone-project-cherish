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
      <CheckboxWrapper>
        <Checkbox type="checkbox" />
        <span id={id}>{value}</span>
      </CheckboxWrapper>
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
            <img src={editIcon} alt="edit icon" height="20px" />
          </EditButton>
        ) : (
          <EditButton align="right" onClick={() => setEditMode(false)}>
            <img src={returnIcon} alt="return icon" height="20px" />
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

const Headline = styled.h1`
  color: var(--font);
  text-shadow: -1px 1px 0px var(--font-shadow),
    -2px 2px 0px var(--font-shadow-medium), -3px 3px 0px var(--font-shadow-dark);
  font-weight: 400;
  text-align: center;
`;

const Checkbox = styled.input`
  appearance: none;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 100vw;
  height: 1rem;
  margin-right: 0.7rem;
  position: absolute;
  right: 0.4rem;
  width: 1rem;

  :checked {
    background: teal;
  }
`;

const CheckboxWrapper = styled.div`
  align-items: center;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.75rem;
  display: flex;
  height: 3.5rem;
  margin: 0.5rem 0.75rem;
  padding: 0.45rem 0.75rem;
  position: relative;
  top: 40%;
`;

const BackButton = styled.button`
  align-items: center;
  backdrop-filter: blur(1px);
  background-color: hsla(330, 100%, 71%, 0.7);
  border: 1px solid ivory;
  border-radius: 1rem;
  bottom: 19%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  color: white;
  cursor: pointer;
  display: flex;
  font-weight: 5;
  justify-content: space-around;
  left: 10%;
  padding: 0.5rem;
  position: fixed;
  width: 9rem;
`;

const TrackerButton = styled.button`
  align-items: center;
  backdrop-filter: blur(1px);
  background-color: hsla(330, 100%, 71%, 0.7);
  border: 1px solid ivory;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  bottom: 19%;
  color: white;
  cursor: pointer;
  display: flex;
  font-weight: 5;
  justify-content: space-around;
  right: 10%;
  padding: 0.5rem;
  position: fixed;
  width: 9rem;
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
  color: var(--font);
  cursor: pointer;
  display: flex;
  right: 9%;
  position: absolute;
  top: 14%;
  z-index: 100;
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
