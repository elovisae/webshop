import React from 'react';
import Nav from '../all/Nav';
import './homePage.css'
import NewsGallery from './NewsGallery';


const HomePage = () => {
  return (
    <div>
        <Nav />
        <article>
          <NewsGallery />
          <section>
            <h2>Sign up and get 10% off!</h2>
            <p>When signing up...</p>
            <input type="text" placeholder='Your email adress'/>
          </section>
        </article>
    </div>
  )
}

export default HomePage