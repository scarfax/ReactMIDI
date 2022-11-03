import React from 'react';

function Keys(props) {
  const start = (sound) => {
    console.log(sound.target.innerText);
    const audio = new Audio(`../../sounds/${sound.target.innerText}.wav`);
    audio.play();
  };

  return (
    <div className="keyboard">
      {props.keys.map((keys) => (
        <button className="key" onClick={start}>
          {keys}
        </button>
      ))}
    </div>
  );
}

export default Keys;
