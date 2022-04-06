import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import user from '../../img/user.png'
const HeaderOnly = () => {
    const navigate = useNavigate();
  return (
    <header>
          <div id="shit">
            <p id="arrow" onClick={() => navigate(-1)}>A</p>
            <Link to='/' className="link"><h1>AMANDA</h1></Link>
            <div> 
              <Link to='/login'><img id="user-icon" className="icon" src={user} alt="" /></Link>
            </div>
          </div>
        </header>
  )
}

export default HeaderOnly