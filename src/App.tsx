import React, { useRef, useEffect } from 'react';
import ProjectDetails from './projectDetails/ProjectDetails';
import email from './images/Email.svg';
// from https://www.flaticon.com/free-icon/linkedin-logo_61109
import linkedIn from './images/LinkedIn.png';
// thanks to https://www.flaticon.com/authors/dave-gandy
import gitHub from './images/GitHub.png';
import './App.css';

function App(): JSX.Element {
  const projectsRef = useRef<HTMLDivElement>(null);
  const selfRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);
  
  const onClickToScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const listener = () => {
      const menuBar = menuBarRef.current;
      if(menuBar) {
        if(!window.scrollY) {
          menuBar.className = 'MenuBar';
          return;
        }
        menuBar.className = 'MenuBar Scroll';
      }
    };
    document.addEventListener('scroll', listener);
  return () => {
    document.removeEventListener('scroll', listener);
  };
}, [menuBarRef]);

  return (
    <>
      <header className='MenuBar' id='MenuBar' ref={menuBarRef}>
        <button className='Nav' onClick={() => {onClickToScroll(selfRef)}}>About</button>
        <button className='Nav' onClick={() => {onClickToScroll(projectsRef)}}>Projects</button>
        <button className='Nav' onClick={() => {onClickToScroll(contactRef)}}>Contact me</button>
      </header>

      <div className='AppRoot'>
        <div className='Section Top' id='Self' ref={selfRef}>
          <h1 className='AppName'>Juhi Bhatnagar</h1>
          <p className='AppContent'>
            I am a software engineer at Microsoft, skilled in web development and project management.
            <b> I am passionate about transforming complexity into intuitive products.</b>
            <br />
            I am also passionate about DEI in the workplace and in everyday life.
            <br /> 
            I have a Master of Computer Science, with an HCI specialization, from Rice University.
            <br />
            <br />
            In my free time, I study the Japanese language and play my guitar. 
            I also enjoy writing poems to unwind after a long week.
            <br />
            I can often be found clicking 1000 pictures of my cat in the same pose. 
            (Check out <a className='Link' href='#/flipbook' target='_blank' rel='noreferrer'>this 
            flipbook</a> I made for a sneak peek.)
          </p>
        </div>

        <div className='Section' id='Projects' ref={projectsRef}>
          <h2 className='AppTitle'>Projects</h2>
          <div className='ProjectsList'>
            <ProjectDetails />
          </div>
        </div>

        <div className='Section' id='Contact' ref={contactRef}>
          <div className='SocialMedia'>
            <a href='mailto:juhi.bhatnagar95@gmail.com' target='_blank' rel='noreferrer' title='Email'>
              <img className='Email Image' src={email} alt='Envelope icon' />
            </a>
            <a href='https://www.linkedin.com/in/juhi-bhatnagar' target='_blank' rel='noreferrer' title='LinkedIn profile'>
              <img className='LinkedIn Image' src={linkedIn} alt='LinkedIn logo' />
            </a>
            <a href='https://github.com/juhi-bhatnagar/juhi-bhatnagar.github.io' target='_blank' rel='noreferrer' title='GitHub profile'>
              <img className='GitHub Image' src={gitHub} alt='GitHub logo' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
