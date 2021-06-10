import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';

import FooterNavigation from './components/FooterNavigation';
import Home from './pages/Home';
import Plus from './pages/Plus';
import Goals from './pages/Goals';
import Landing from './pages/Landing';

function App() {
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
`