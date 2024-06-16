import React from 'react';
import yugen from './projectCovers/Yugen.png';
import hestia from './projectCovers/Hestia.png';
import killfie from './projectCovers/Hestia.png';
import voteBox from './projectCovers/Hestia.png';
import './ProjectDetails.css';

interface IProjectProps {
  cover: string;
  coverAlt: string;
  title: string;
  description: string;
  link?: string;
  additionalLink?: string;
}

export default function ProjectDetails(): JSX.Element {
  return (
    <>
      <Project 
        cover={voteBox} 
        coverAlt='' 
        title='VoteBox: Making Ballots More Usable'
        description='Analyzed eye-tracking data to measure accuracy of Python-based voting ballot layouts' 
      />

      <Project 
        cover={killfie} 
        coverAlt='Presentation board with screenshots of screens from Selfie Android app' 
        title='How Selfie Becomes Killfie'
        description='An Android app to study the cause and prevention of selfies that cause deaths' 
        link='https://juhibhatnagarportfolio.wordpress.com/2017/09/27/when-selfie-becomes-killfie/'
        additionalLink='https://repository.iiitd.edu.in/xmlui/handle/123456789/563'
      />

      <Project 
        cover={hestia} 
        coverAlt='Presentation board with screenshots of screens from Hestia Android app' 
        title='Hestia'
        description='An Android app to connect homemakers in India with customers seeking homemade food' 
        link='https://juhibhatnagarportfolio.wordpress.com/2017/09/27/hestia-for-the-love-of-homemade-food/'
      />
      
      <Project 
        cover={yugen} 
        coverAlt='Purple and orange background with the word "Yugen" written in Japanese Kanji and English' 
        title='Yugen'
        description='Blog of a collection of my poems on Medium' 
        link='https://medium.com/y%C5%ABgen'
      />
    </>
  );
}

function Project(props: IProjectProps): JSX.Element {
  const { cover, coverAlt, title, description, link, additionalLink } = props;

  return (
    <div className='Project' id={title}>
      <img className='ProjectCover' src={cover} alt={coverAlt} />
      <div className='ProjectContent'>
        <div className='ProjectTitle'>{title}</div>
        <div className='ProjectDescription'>{description}</div>
        {link && <a 
          className='ProjectLink' 
          href={link} 
          target='_blank' 
          rel='noreferrer' 
          title='Click here to go to the website. Opens in a new tab'>
            More details
        </a>}
        {additionalLink && <a 
          className='ProjectLink' 
          href={additionalLink} 
          target='_blank' 
          rel='noreferrer' 
          title='Click here to go to the official website. Opens in a new tab'>
            Official website
        </a>}
      </div>
    </div>
  );
}