import { useState } from 'react';
import './App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


function App() {
  const [ alphaId, setAlphaId ] = useState(0);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const sliderChanged = (id) => {
    setAlphaId(id)
  }

  return (
    <div id="app">
      <span id="alpha">
        { letters[alphaId] }
      </span>     
      <div id="slider-container">
        <Slider
          min={0}
          max={letters.length - 1}
          value={alphaId}
          onChange={sliderChanged}
        />
      </div>

  
    </div>
  );
}

export default App;
