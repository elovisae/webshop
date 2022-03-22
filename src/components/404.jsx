import React from 'react';
import Nav from './all/Nav';
import Footer from './all/Footer';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Nav/>
        <main>
            <h2>OOPS...</h2>
            <p>The page you tried to reach does not exist</p>
            <p onClick={() => navigate(-1)}>Go back!</p>
        </main>
        <Footer/>
    </div>
  )
}

export default ErrorPage