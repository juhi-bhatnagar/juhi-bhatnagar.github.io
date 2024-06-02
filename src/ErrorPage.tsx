import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className='ErrorTitle'>Oops!</h1>
      <p className='ErrorContent'>Sorry, an unexpected error has occurred.</p>
      <p>
        <a href='/' className='ErrorLink'>Click here to go back to home page</a>
      </p>
    </div>
  );
}
