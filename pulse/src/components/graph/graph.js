import React from 'react';
import './graph.css';

const Graph = () => {
  return (
    <div className="graph">
      <div className="bar">
        <div className='T1'>
          <input type='number' placeholder='T1(ms)' className='t1'></input>
        </div>
        <div className='T2'>
          <input type='number' placeholder="T2(ms)" className='t2'></input>
        </div>
        <div className='T3'>
        <input type='number' placeholder='T3(ms)' className='t3'></input>
        </div>
        <div className='T4'>
          <input type='number' placeholder='T4(ms)' className='t4'></input>
        </div>
      </div>
    </div>
  );
};

export default Graph;
