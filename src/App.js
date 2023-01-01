import React from 'react';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

import Header from './Pages/Header';
import Discussions from './Pages/Discussions.js';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.body_bg};
}

main {
  width: 600px;
  flex: 1 0 0 ;
}
`;

function App() {

  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyle />
        <main>
          <Header isOn={isOn} toggleButton={toggleHandler} />
          <Discussions />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App;