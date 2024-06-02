import React from 'react';
import './Content.css';
import bellaSleeping from './images/BellaSleeping.jpeg';

export default function Page5(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella sleeping</h2>
      <img className='Image' style={style} src={bellaSleeping} alt='Bella curled up and sleeping' />
    </div>
  );
}