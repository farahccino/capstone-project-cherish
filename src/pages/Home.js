import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import FooterNavigation from '../components/FooterNavigation';
import HabitForm from '../components/HabitForm';
import Today from '../components/TodaysDate';

import editIcon from '../images/edit.svg';
import deleteIcon from '../images/delete.svg';
import returnIcon from '../images/return.svg';


Home.propTypes = {
    habits: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string
        })
    )
}

export default function Home({
    habit,
    habits,
    setHabits,
    id,
    habitToEdit,
    setHabitToEdit,
    setActivePage
}) {
    

 const [editMode, setEditMode] = useState(false)

 const checkbox = (value)=>{
     return (
         <div>
             <input type="checkbox" />
             <span id={id}>{value}</span>
         </div>
     )
 }

 function handleDeleteClick(id) {
    const index = habits.findIndex(habit => habit.id === id)
    setHabits([
      ...habits.slice(0, index),
      ...habits.slice(index + 1),
    ])
  }

  function handleEditClick(id) {
    const index = habits.findIndex(habit => habit.id === id)
    setHabitToEdit(habits[index])
    setActivePage('form')
  }


  return (
    <>
    <Headline Today={Today}> This is the today page. </Headline>
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

  
    <span> 
    {habits.map((habit, id)=>{
        <HabitForm
        key={id}
        id={id}
        habit={habit}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        />
     if(habit.häufigkeit=="täglich"){
         return checkbox(habit.ziel)
     }
    })} 
    </span>

    {editMode && (
        <>
          <IconButton
            right="10px"
            top="20px"
            onClick={() => handleDeleteClick(id)}
            position="absolute"
          >
            <img src={deleteIcon} alt="löschen" height="16px" />
          </IconButton>
          <IconButton
            right="10px"
            top="52px"
            onClick={() => handleEditClick(id)}
            position="absolute"
          >
            <img src={editIcon} alt="bearbeiten" height="16px" />
          </IconButton>
        </>
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
`

const ButtonWrapper = styled.section`
    align-items: center;
    display: flex;
    margin-left: 8.5rem;
    margin-top: 430px;
`

const EditButtonWrapper = styled.div`
    align-items: end;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: end;
`

const Headline = styled.h1`
    display: flex;
    align-items: center;
    font-family: 'Roboto'
`

const IconButton = styled.button`
    border: none;
    border-radius: 100vw;
`