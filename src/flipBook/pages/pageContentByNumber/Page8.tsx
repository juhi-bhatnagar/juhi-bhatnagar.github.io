import React from 'react';
import './Content.css';
import bellaNapping from './images/BellaNapping.jpg';

export default function Page8(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella sleeping again</h2>
      <img className='Image' style={style} src={bellaNapping} alt='Bella laying in the sun' />
    </div>
  );
}