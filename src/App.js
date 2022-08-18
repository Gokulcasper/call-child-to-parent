import React, { useState } from 'react'
import './App.css';
import Callback from './Callback';

// Parent
const App = () => {
  const [UIcolor, setUIColor] = useState(null);

  // our callback function
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className='App'>
      <div
        className='App_container'
        style={{ backgroud: `${UIcolor}` }}>
      </div>
      <Callback getColor={getColor} />

    </div>
  );
}

export default App