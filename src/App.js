import React from 'react';
import './css/index.css';

function App() {
  const start = (sound) => {
    console.log(sound.target.innerText);
    const audio = new Audio(`../../sounds/${sound.target.innerText}.wav`);
    audio.play();
  };

  return (
    <div className="keyboard">
      <button className="key" onClick={start}>
        Pom
      </button>
      <button className="key" onClick={start}>
        Clap
      </button>
      <button className="key" onClick={start}>
        Tim
      </button>

      <button className="key" onClick={start}>
        Puff
      </button>
      <button className="key" onClick={start}>
        Splash
      </button>
      <button className="key" onClick={start}>
        Toim
      </button>

      <button className="key" onClick={start}>
        Psh
      </button>
      <button className="key" onClick={start}>
        Tic
      </button>
      <button className="key" onClick={start}>
        Tom
      </button>
    </div>
  );
}

export default App;
