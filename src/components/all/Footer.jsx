import React from 'react';
import './footer.css'
import {Link} from 'react-router-dom';
import './main.css'

const Footer = () => {
  return (
    <footer>
        <div>
            <h3>We are AMANDA</h3>
            <p>About us</p>
            <p>Work with us</p>
        </div>
        <div>
            <h3>Contact</h3>
            <p>Mail: info@amanda.com</p>
            <p>Phone: +46 701 234 56 78</p>
        </div>
        <div>
            <h3><Link to='/shop' className='link'>Shop now</Link></h3>
            <p><Link to="/bestsellers" className="link">Bestsellers</Link></p>
            <p><Link to='/shop' className='link'>All clothes</Link></p>
            <p><Link to='/cart' className='link'>Your cart</Link></p>
        </div>
        <div>
            <h3>Social media</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
        </div>
    </footer>
  )
}

export default Footer