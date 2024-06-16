import React from 'react';
import './Content.css';
import bellaShy from './images/BellaShy.jpg';

export default function Page7(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella playing coy</h2>
      <img className='Image' style={style} src={bellaShy} alt='Bella looking away from the camera' />
    </div>
  );
}