import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';

import FooterNavigation from './FooterNavigation';
import Home from './pages/Home';
import Plus from './pages/Plus';
import Goals from './pages/Goals';

function App() {
  return (
    <>
    <div>
      <Headline>Cherish</Headline>
      <MainContainer>
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/add-goal'>
          <Plus />
        </Route>
        <Route path='/goals'>
          <Goals />
        </Route>
        </Switch>
    </MainContainer>
    <FooterNavigation />
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
  background-color: pink;
`