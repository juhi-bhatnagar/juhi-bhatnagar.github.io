import React from 'react';
import './Content.css';
import bellaWorking from './images/BellaWorking.jpeg';

export default function Page3(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella working hard</h2>
      <img className='Image' style={style} src={bellaWorking} alt='Bella sitting next to a laptop' />
    </div>
  );
}