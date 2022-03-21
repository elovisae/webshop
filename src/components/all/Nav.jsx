import React from 'react'
import './nav.css'
import cart from '../../img/shopping-bag.png'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div id="shit">
        <p>hello</p>
        <Link to='/' class="link"><h1>AMANDA</h1></Link>
        <div> 
          <img id="shopping-bag" src={cart} alt="" />
        </div>
      </div>
      <ul>
          <li>Link</li>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link4</li>
          <li>Link5</li>
      </ul>
    </nav>
  )
}

export default Nav