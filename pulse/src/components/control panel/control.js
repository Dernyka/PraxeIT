import React, { useState } from 'react';
import './control.css';

const Control = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleOnOff = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className='control'>
      <div className='top'>
        <div className='onOff'>
          <button 
            className={`onOffButton ${isOn ? 'on' : 'off'}`}
            onClick={toggleOnOff}
          >
            <h1 className='onOffText'>On/Off</h1>
          </button>
        </div>
        <div className='saveLoad'>
          <div className='saveLoadButtons'>
            <button className='save'>Save</button>
            <button className='load'>Load</button>
          </div>
        </div>
      </div>
      <div className='mid'>
        <div className='pbn'>
          <div className='pbnButtons'>
            <button className='positive'>Positive</button>
            <button className='bipolar'>Bipolar</button>
            <button className='negative'>Negative</button>
          </div>
        </div>
        <div className='burst'>
          <div className='bg'>
            <h1>Burst</h1>
            <input type='checkbox' className='toggle' id='test'></input>
            <label htmlFor='test' className='label'>
              <div className='ball'></div>
            </label>
            <input type='number' className='burstInput' placeholder='Num of Bursts'></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
