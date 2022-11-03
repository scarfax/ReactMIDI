import React from 'react';
import './css/index.css';
import Keys from './Keys';

function Keyboard(props) {
  return (
    <section>
      <h1>React MIDI</h1>
      <Keys keys={props.keys} />
    </section>
  );
}

export default Keyboard;
