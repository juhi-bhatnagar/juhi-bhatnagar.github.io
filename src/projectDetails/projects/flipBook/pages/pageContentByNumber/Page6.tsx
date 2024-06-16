import React from 'react';
import './Content.css';
import bellaHiding from './images/BellaHiding.jpg';

export default function Page6(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella hiding</h2>
      <img className='Image' style={style} src={bellaHiding} alt='Bella hiding under a blanket' />
    </div>
  );
}