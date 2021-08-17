import React from 'react';
import { BreakLength, Header, SessionLength, Timer } from './components/index';

function App() {
 
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="main-wrap">
          <div className="interval-wrap">
            <BreakLength />
            <SessionLength />
          </div>
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;