import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import PageCover from './pages/PageCover';
import Page1 from './pages/pageContentByNumber/Page1';
import Page2 from './pages/pageContentByNumber/Page2';
import Page3 from './pages/pageContentByNumber/Page3';
import Page4 from './pages/pageContentByNumber/Page4';
import Page5 from './pages/pageContentByNumber/Page5';
import Page6 from './pages/pageContentByNumber/Page6';
import Page7 from './pages/pageContentByNumber/Page7';
import Page8 from './pages/pageContentByNumber/Page8';
import './Book.css';

export default function Book(): JSX.Element {
  const height = window.innerHeight > 700 ? 500 : 250;
  const width = window.innerWidth > 400 ? 250 : 500;

  return (
    // @ts-ignore
      <HTMLFlipBook 
        className='Book'
        width={width}
        height={height}
        minWidth={100}
        maxWidth={500}
        minHeight={100}
        maxHeight={500} 
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        size='stretch'
      >
      <div className='PageCover'>
        <PageCover />
      </div>

      {/**
        * The PageLeft and PageRight divs are required by this library so it can't be
        * modularized into a function or component
      */}
      <div className='PageLeft'>
        <Page1 />
      </div>
      <div className='PageRight'>
        <Page2 />
      </div>
      <div className='PageLeft'>
        <Page3 />
      </div>
      <div className='PageRight'>
        <Page4 />
      </div>
      <div className='PageLeft'>
        <Page5 />
      </div>
      <div className='PageRight'>
        <Page6 />
      </div>
      <div className='PageLeft'>
        <Page7 />
      </div>
      <div className='PageRight'>
        <Page8 />
      </div>
    </HTMLFlipBook>
  );
}
