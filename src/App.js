import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Pages/Header';
import Discussions from './Pages/Discussions.js';

const GlobalStyle = createGlobalStyle`
:root {
    /* body color */
    --body_bg: #dcdcdc;

    /* header color */
    --header_text: #1676f2;
    --header_bg: white;

    /* container color */
    --container_bg: white;
    --container_label: black;
    --container_input: #f0f2f6;
    --container_input_text: black;
    --container_submit_bg: #1676f2;
    --container_submit_text: white;
    /* hover container color */
    --hover_container_input: #f0f2f6;
    --hover_container_input_border: #1676f2;
    --hover_container_submit_bg: #6E9FED;
    --hover_container_submit_text: white;
    /* focus container color */
    --focus_container_input: #f0f2f6;
    --focus_container_input_border: #1676f2;
    
    /* discussion color */
    --discussion_bg: white;
    --discussion_text: black;
    --discussion_a: black;
    /* hover discussion color */
    --hover_discussion_bg: #e4e6ea;

    /* toggle */
    --toggle_bg: #1676f2;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  background-color: #dcdcdc;
  height: 100vh;
}

main {
  width: 600px;
  flex: 1 0 0 ;
}
`;

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <main>
        <Header />
        <Discussions />
      </main>
    </div>
  )
}

export default App;