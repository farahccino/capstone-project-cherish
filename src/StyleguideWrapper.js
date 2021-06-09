import GlobalStyle from './GlobalStyle';

function StyleGuideWrapper({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
export default StyleGuideWrapper;