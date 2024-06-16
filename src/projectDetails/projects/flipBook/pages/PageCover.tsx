import React from 'react';
import './PageCover.css';

export default function PageCover(): JSX.Element {
  const styleName = window.innerWidth < 950 ? {} : {
    'padding': '90px',
    'paddingBottom': '20px'
  };
  const styleContent = window.innerWidth < 950 ? {
    'fontSize': '15px',
    'fontWeight': '150',
    'padding': '15px'
  } : {
    'fontSize': '20px',
    'fontWeight': '300',
    'padding': '50px 30px'
  };

  return (
    <div>
      <h2 className='Name' style={styleName}>Moments with Bella</h2>
      <p className='AboutContent' style={styleContent}>
        This is a scrapbook of some special moments with my cat, Bella. 
        Hope you enjoy going through them as much as I do!
      </p>
    </div>
  );
}
