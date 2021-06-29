import styled from 'styled-components/macro';

import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { updateLocalStorage, loadFromLocalStorage } from './lib/localStorage';

import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Plus from './pages/Plus';
import Goals from './pages/Goals';
import Landing from './pages/Landing';

export default function App() {
  const [habitToEdit, setHabitToEdit] = useState(null);

  const [habits, setHabits] = useState(
    loadFromLocalStorage('cherishHabits') ?? []
  );
  useEffect(() => {
    updateLocalStorage('cherishHabits', habits);
  }, [habits]);

  function addHabit(newHabit) {
    setHabits([newHabit, ...habits]);
  }

  function editHabit(editedHabit) {
    const upToDateHabits = habits.filter(
      (habit) => habit.id !== editedHabit.id
    );
    setHabits([editedHabit, ...upToDateHabits]);
  }

  return (
    <>
      <div>
        <Headline />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/today">
            <Home
              habits={habits}
              setHabits={setHabits}
              onEditHabit={editHabit}
              onSetHabitToEdit={setHabitToEdit}
              habitToEdit={habitToEdit}
            />
          </Route>
          <Route path="/tracker">
            <Tracker habits={habits} />
          </Route>
          <Route path="/add-goal">
            <Plus onAddHabit={addHabit} setHabitToEdit={setHabitToEdit} />
          </Route>
          <Route path="/goals">
            <Goals
              habits={habits}
              setHabits={setHabits}
              onSaveHabit={editHabit}
              onSetHabitToEdit={setHabitToEdit}
              habitToEdit={habitToEdit}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

const Headline = styled.h1`
  color: ivory;
  font-family: 'Roboto';
  text-align: center;
`;
