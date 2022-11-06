import React from 'react';
import './css/index.css';
import Keyboard from './Keyboard';

function App() {
  return (
    <Keyboard
      keys={[
        'Pom',
        'Clap',
        'Tim',
        'Puff',
        'Splash',
        'Toim',
        'Psh',
        'Tic',
        'Toim',
      ]}
    />
  );
}

export default App;
