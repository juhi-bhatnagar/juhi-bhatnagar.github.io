import React from 'react';
import './Content.css';
import bellaYawning from './images/BellaYawning.jpg';

export default function Page4(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella tired from hard work</h2>
      <img className='Image' style={style} src={bellaYawning} alt='Bella yawning' />
    </div>
  );
}