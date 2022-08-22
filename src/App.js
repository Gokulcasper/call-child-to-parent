import React, { useState } from 'react'
import './App.css';
import Callback from './Callback';
import ColorPicker from './ColorPicker';

// Parent
const App = () => {
  const [UIcolor, setUIColor] = useState("#ff0000");



  return (
    <div className='App'>
      <div
        className='App_container'
        style={{ background: `${UIcolor}` }}>
      </div>
      <ColorPicker
        UIcolor={UIcolor}
        setUIColor={setUIColor}
      />
    </div>
  );
}

export default App