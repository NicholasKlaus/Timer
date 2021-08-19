import React from 'react';
import { BreakLength, Header, SessionLength, Timer } from './components/index';

function App() {
 
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrap">
          <div className="interval interval_wrap">
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