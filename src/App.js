import styled from 'styled-components/macro';

import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { updateLocalStorage, loadFromLocalStorage } from './lib/localStorage';

import Home from './pages/Home';
import Plus from './pages/Plus';
import Goals from './pages/Goals';
import Landing from './pages/Landing';

function App() {

  const [fieldName, setFieldName] = useState('');
  const [fieldValue, setFieldValue] = useState('');
  const [frequency, setFrequency] = useState('');
  const [frequencyName, setFrequencyName] = useState('');
  const [activePage, setActivePage] = useState('today');
  const [habitToEdit, setHabitToEdit] = useState([]);
  
  const [habits, setHabits] = useState(
    loadFromLocalStorage('cherishHabits') ?? []
  );

  useEffect(() => {
    updateLocalStorage('cherishHabits', habits);
  }, [habits]);


  function addHabit(newHabit){
    setHabits([newHabit, ...habits])
  }

  function handleActivePage(page) {
    setActivePage(page)
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newHabit = {[fieldName]: fieldValue, [frequencyName]: frequency }
    addHabit(newHabit)
    const habitsArrayWithId = fieldName.value
  .map(fieldName => ({ id: uuidv4(), fieldName: fieldName }))
}

  
function updateField(event) {
  setFieldName(event.target.name);
  setFieldValue(event.target.value);  
}

function updateFrequency(event) {
  setFrequencyName(event.target.name);
  setFrequency(event.target.value);
}
  

  return (
    <>
    <div>
      <Headline></Headline>
      <MainContainer>
       <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/today'>
          <Home habits={habits} onSetHabitToEdit={setHabitToEdit} handleFormSubmit={handleFormSubmit} habitToEdit={habitToEdit}/>
        </Route>
        <Route path='/add-goal'>
          <Plus addHabit={addHabit} setHabitToEdit={setHabitToEdit} onNavigate={handleActivePage} updateField={updateField} updateFrequency={updateFrequency}/>
        </Route>
        <Route path='/goals'>
          <Goals />
        </Route>
        </Switch>
    </MainContainer>
    </div>
    </>
  );
}

export default App;

const Headline = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  color: ivory;
`;

const MainContainer = styled.main`
`