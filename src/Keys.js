import React from 'react';

function Keys(props) {
  const start = (sound) => {
    console.log(sound.target.innerText);
    const audio = new Audio(`../../sounds/${sound.target.innerText}.wav`);
    audio.play();
  };

  const keyList = props.keys.map((keys, index) => (
    <button key={index} className="key" onClick={start}>
      {keys}
    </button>
  ));

  return <div className="keyboard">{keyList}</div>;
}

export default Keys;
