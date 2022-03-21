import React, {useState} from 'react';
import Nav from '../all/Nav';
import './homePage.css'
import NewsGallery from './NewsGallery';
import Footer from '../all/Footer';


const HomePage = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div>
        <Nav />
        <main>
          <NewsGallery />
          <section className='newsletter-form'>
            <h2>Sign up and get 10% off!</h2>
            <p>When signing up...</p>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder='Your email adress...'/>
              <div><button>SIGN UP</button></div>
            </form>

          </section>
        </main>
        <Footer />
    </div>
  )
}

export default HomePage