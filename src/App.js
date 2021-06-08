import styled from 'styled-components/macro';
import FooterNavigation from './FooterNavigation';

function App() {
  return (
    <>
    <div>
      <Headline>Cherish</Headline>
    </div>
    <FooterNavigation />
    </>
  );
}

export default App;

const Headline = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  color: ivory;
`;