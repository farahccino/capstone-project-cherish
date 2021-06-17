import styled from 'styled-components/macro';

import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { updateLocalStorage, loadFromLocalStorage } from './lib/localStorage';

import Home from './pages/Home';
import Plus from './pages/Plus';
import Goals from './pages/Goals';
import Landing from './pages/Landing';

function App() {

  const [habits, setHabits] = useState(
    loadFromLocalStorage('cherishHabits') ?? []
  );


useEffect(() => {
    updateLocalStorage('cherishHabits', habits);
  }, [habits]);


  function addHabit(newHabit){
    setHabits([newHabit, ...habits])
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
          <Home habits={habits}/>
        </Route>
        <Route path='/add-goal'>
          <Plus onAddHabit={addHabit}/>
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