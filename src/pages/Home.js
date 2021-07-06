import { useEffect, useState } from 'react';
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
  habitToEdit,
  onSetHabitToEdit,
  onEditHabit,
}) {
  const [editMode, setEditMode] = useState(false);
  const [showsEditModal, setShowsEditModal] = useState(false);
  const [trackingData, setTrackingData] = useState(
    loadFromLocalStorage('trackingData') ?? {}
  );
  const today = format(new Date('2021-07-04'), 'yyyy-MM-dd');

  const date = format(new Date('2021-07-04'), 'EEEE, dd.MM.yyyy', {
    locale: de,
  });

  useEffect(() => {
    function initialiseTrackingDataForToday(dailyHabits) {
      if (!(today in trackingData)) {
        const activitiesForToday = dailyHabits.map((habit) => ({
          activity: habit,
          done: false,
        }));
        setTrackingData({ [today]: activitiesForToday, ...trackingData });
      }
    }
    const dailyHabits = habits.filter((habit) => habit.frequency === 'täglich');
    initialiseTrackingDataForToday(dailyHabits);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkIfTrackedAlready(habit) {
    if (today in trackingData) {
      return trackingData[today].some((trackingActivity) => {
        if (trackingActivity.activity.id === habit.id) {
          return trackingActivity.done;
        }
        return false;
      });
    }
  }

  const checkbox = (habit) => {
    return (
      <CheckboxWrapper>
        <Checkbox
          type="checkbox"
          checked={checkIfTrackedAlready(habit)}
          onClick={(event) => placeIntoStorage(habit, event)}
        />
        <HabitName id={habit.id}>{habit.goal}</HabitName>
      </CheckboxWrapper>
    );
  };

  function saveToLocalStorage(trackingData, data) {
    localStorage.setItem(trackingData, JSON.stringify(data));
  }

  function loadFromLocalStorage(key) {
    try {
      const localData = localStorage.getItem(key);
      return JSON.parse(localData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    saveToLocalStorage('trackingData', trackingData);
  }, [trackingData]);

  function placeIntoStorage(activity, event) {
    const checked = event.target.checked;
    const activities = trackingData[today].map((trackingActivity) => {
      if (trackingActivity.activity.id === activity.id) {
        trackingActivity.done = checked;
      }
      return trackingActivity;
    });
    setTrackingData({
      [today]: activities,
      ...trackingData,
    });
  }

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
            <img src={editIcon} alt="edit icon" height="20px" />
          </EditButton>
        ) : (
          <EditButton align="right" onClick={() => setEditMode(false)}>
            <img src={returnIcon} alt="return icon" height="20px" />
          </EditButton>
        ))}
      <DailyHabitWrapper>
        {habits.map((habit) => {
          if (habit.frequency === 'täglich') {
            return (
              <>
                {checkbox(habit)}

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
      </DailyHabitWrapper>

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
          <img src={returnIcon} alt="return icon" height="20px" /> zurück
        </BackButton>
      </NavLink>
      <FooterNavigation />
    </>
  );
}

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
  font-weight: 600;
  justify-content: space-around;
  left: 10%;
  padding: 0.5rem;
  position: fixed;
  width: 9rem;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
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
    background-image: linear-gradient(#335b71 45%, #03324c 55%);
    box-shadow: 0 2px 2px var(--secondary-dark);
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

const DailyHabitWrapper = styled.div`
  margin-top: 3.5rem;
`;

const DeleteButton = styled.button`
  background-image: linear-gradient(#335b71 45%, #03324c 55%);
  border: 1px solid ivory;
  border-radius: 100vw;
  box-shadow: 0 2px 2px var(--secondary-dark);
  cursor: pointer;
  padding: 0.3rem;
  right: 8%;
  top: 20%;
`;

const EditButton = styled.button`
  align-items: center;
  backdrop-filter: blur(1px);
  background-image: linear-gradient(#335b71 45%, #03324c 55%);
  border: 1px solid ivory;
  border-radius: 100vw;
  box-shadow: 0 2px 2px var(--secondary-dark);
  color: var(--font);
  cursor: pointer;
  display: flex;
  right: 4%;
  padding: 0.4rem;
  position: absolute;
  top: 12%;
  z-index: 100;
`;

const HabitName = styled.span`
  font-weight: 400;
`;

const HabitWrapper = styled.div`
  align-items: center;
  animation: 2s ease 0s 1 normal none running bounceIn;
  backdrop-filter: blur(20px);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    180% {
      transform: scale(1);
    }
  }
`;

const Headline = styled.h1`
  color: var(--font);
  text-shadow: -1px 1px 0px var(--font-shadow),
    -2px 2px 0px var(--font-shadow-medium), -3px 3px 0px var(--font-shadow-dark);
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 0;
  text-align: center;
`;

const ModalButton = styled.button`
  background-image: linear-gradient(#335b71 45%, #03324c 55%);
  border: 1px solid ivory;
  border-radius: 100vw;
  box-shadow: 0 2px 2px var(--secondary-dark);
  cursor: pointer;
  margin: 0 0.25rem;
  padding: 0.3rem;
  left: 13%;
  top: 20%;
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
  font-weight: 600;
  justify-content: space-around;
  right: 10%;
  padding: 0.5rem;
  position: fixed;
  width: 9rem;
`;
