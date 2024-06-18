import React from 'react';
import oneDrive from './projectCovers/OneDrive.png';
import voteBox from './projectCovers/VoteBox.png';
import killfie from './projectCovers/Killfie.png';
import hestia from './projectCovers/Hestia.png';
import yugen from './projectCovers/Yugen.png';
import './ProjectDetails.css';

interface IProjectProps {
  cover: string;
  coverAlt: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  additionalLink?: string;
  additionalLinkText?: string;
}

export default function ProjectDetails(): JSX.Element {
  return (
    <>
    <Project 
        cover={oneDrive}
        coverAlt='Image of OneDrive consumer with the details panel open for an image' 
        title='Microsoft OneDrive'
        description='Built top-requested features for OneDrive consumer and commercial websites'
        link='https://onedrive.live.com/'
        linkText='OneDrive consumer website'
      />

      <Project 
        cover={voteBox}
        coverAlt={`Screenshot of the voteBox project's home page`}
        title='VoteBox: Making Ballots More Usable'
        description='Analyzed eye-tracking data to measure accuracy of Python-based voting ballot layouts' 
      />

      <Project 
        cover={killfie}
        coverAlt='Screenshot from Android application to educate about killfies' 
        title='How Selfie Becomes Killfie'
        description='An Android app to study the cause and prevention of selfies that cause deaths'
        link='https://repository.iiitd.edu.in/xmlui/handle/123456789/563'
        linkText='Official website'
        additionalLink='https://juhibhatnagarportfolio.wordpress.com/2017/09/27/when-selfie-becomes-killfie/'
        additionalLinkText='Blog post'
      />

      <Project 
        cover={hestia} 
        coverAlt='Presentation board with screenshots of screens from Hestia Android app' 
        title='Hestia'
        description='An Android app to connect homemakers in India with customers seeking homemade food' 
        link='https://juhibhatnagarportfolio.wordpress.com/2017/09/27/hestia-for-the-love-of-homemade-food/'
        linkText='Blog post'
      />
      
      <Project 
        cover={yugen} 
        coverAlt='Purple and orange background with the word "Yugen" written in Japanese Kanji and English' 
        title='Yugen'
        description='Blog of a collection of my poems on Medium' 
        link='https://medium.com/y%C5%ABgen'
        linkText='Blog'
      />
    </>
  );
}

function Project(props: IProjectProps): JSX.Element {
  const { 
    cover, 
    coverAlt, 
    title, 
    description, 
    link, 
    linkText = 'Website', 
    additionalLink, 
    additionalLinkText = 'More details'
  } = props;

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
          title={`Click here to go to the ${linkText}. Opens in a new tab`}>
            {linkText}
        </a>}
        {additionalLink && <a 
          className='ProjectLink' 
          href={additionalLink} 
          target='_blank' 
          rel='noreferrer' 
          title={`Click here to go to the ${additionalLinkText}. Opens in a new tab`}>
            {additionalLinkText}
        </a>}
      </div>
    </div>
  );
}