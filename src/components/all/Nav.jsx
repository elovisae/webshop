import React from 'react'
import './nav.css'
import cart from '../../img/shopping-bag.png'
import {Link, useNavigate} from 'react-router-dom';
import user from '../../img/user.png'
 

const Nav = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div id="shit">
        <p id="arrow" onClick={() => navigate(-1)}>A</p>
        <Link to='/' className="link"><h1>AMANDA</h1></Link>
        <div> 
          <Link to='/cart'><img id="user-icon" className="icon" src={user} alt="" /></Link>
          <Link to='/login'><img className="icon" src={cart} alt="" /></Link>
        </div>
      </div>
      <nav>
        <ul>
            <li><Link to="/shop/all" className='link'>Shop</Link></li>
            <li><Link to='/bestsellers' className='link'>Bestsellers</Link></li>
            <li><Link to='/new-in' className='link'>New in</Link></li>
            <li>About us</li>
            <li>Q&A</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav