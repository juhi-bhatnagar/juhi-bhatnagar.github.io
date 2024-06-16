import React from 'react';
import './Content.css';
import bellaSunning from './images/BellaSunning.jpg';

export default function Page1(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella sunning herself</h2>
      <img className='Image' style={style} src={bellaSunning} alt='Bella laying in the sun' />
    </div>
  );
}