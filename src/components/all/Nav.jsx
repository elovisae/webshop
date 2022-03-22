import React from 'react'
import './nav.css'
import cart from '../../img/shopping-bag.png'
import {Link, useNavigate} from 'react-router-dom';
 

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div id="shit">
        <p id="arrow" onClick={() => navigate(-1)}>A</p>
        <Link to='/' className="link"><h1>AMANDA</h1></Link>
        <div> 
          <img id="shopping-bag" src={cart} alt="" />
        </div>
      </div>
      <ul>
          <li>Shop</li>
          <li><Link to='/bestsellers' className='link'>Bestsellers</Link></li>
          <li><Link to='/new-in' className='link'>New in</Link></li>
          <li>About us</li>
          <li>Q&A</li>
      </ul>
    </nav>
  )
}

export default Nav