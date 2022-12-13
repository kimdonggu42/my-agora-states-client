import React from 'react';
import './App.css';

import Header from './Pages/Header';
import Discussions from './Pages/Discussions.js';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Discussions />
      </main>
    </div>
  )
}

export default App;

