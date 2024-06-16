import React from 'react';
import './Content.css';
import bellaChair from './images/BellaChair.jpg';

export default function Page2(): JSX.Element {
  const style = window.innerHeight < 600 ? {
    'height': '300px'
  } : {};

  return (
    <div className='Content'>
      <h2 className='Title'>Bella's spot on the table</h2>
      <img className='Image' style={style} src={bellaChair} alt='Bella sitting on a dining chair' />
    </div>
  );
}